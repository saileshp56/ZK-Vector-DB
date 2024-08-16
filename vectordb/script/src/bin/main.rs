use sp1_sdk::{ProverClient, SP1ProofWithPublicValues, SP1Stdin};

/// The ELF (executable and linkable format) file for the Succinct RISC-V zkVM.
pub const ELF: &[u8] = include_bytes!("../../../elf/riscv32im-succinct-zkvm-elf");

fn main() {
    // Setup the logger.
    sp1_sdk::utils::setup_logger();

    // Setup the prover client.
    let client = ProverClient::new();
    let (pk, vk) = client.setup(ELF);

    // Setup the inputs.
    let mut stdin = SP1Stdin::new();

    // Generate a proof
    let mut proof = client.prove(&pk, stdin).run().unwrap();

    println!("Generated proof");

    // Read the output
    let query = proof.public_values.read::<Vec<f64>>();
    let result = proof.public_values.read::<Vec<f64>>();

    println!("query: {:#?}", query);
    println!("result: {:#?}", result);

    // Verify the proof and public values
    client.verify(&proof, &vk).expect("Verification failed");

    let proof_path = "proof-with-pis.bin";
    proof.save(proof_path).expect("Saving proof failed");
    let deserialized_proof =
        SP1ProofWithPublicValues::load(proof_path).expect("loading proof failed");

    client
        .verify(&deserialized_proof, &vk)
        .expect("verification failed");

    println!("successfully generated and verified proof for the program!")
}
