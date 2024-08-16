//! A simple abstraction of a decentralized vector database.

#![no_main]
sp1_zkvm::entrypoint!(main);

pub struct Record {
    embedding: Vec<f64>,
    value: String,
}

impl Record {
    pub fn value(&self) -> &str {
        &self.value
    }

    pub fn embedding(&self) -> Vec<f64> {
        self.embedding.clone()
    }
}

pub struct VectorDB {
    records: Vec<Record>,
}

impl VectorDB {
    pub fn new() -> Self {
        VectorDB {
            records: Vec::new(),
        }
    }

    pub fn add_embedding(&mut self, embedding: Vec<f64>, value: String) {
        self.records.push(Record { embedding, value });
    }

    pub fn search(&self, query: &Vec<f64>) -> Option<&Record> {
        let mut min_similarity = f64::INFINITY;
        let mut closest_record: Option<&Record> = None;
        for record in &self.records {
            let similarity = cosine_similarity(&record.embedding(), query);

            if similarity < min_similarity {
                closest_record = Some(record);
                min_similarity = similarity;
            }
        }

        closest_record
    }
}

pub fn cosine_similarity(v1: &Vec<f64>, v2: &Vec<f64>) -> f64 {
    assert_eq!(v1.len(), v2.len());

    let dot_prod: f64 = v1.iter().zip(v2.iter()).map(|(a, b)| a * b).sum();
    let mag_a: f64 = v1.iter().map(|x| x * x).sum::<f64>().sqrt();
    let mag_b: f64 = v2.iter().map(|x| x * x).sum::<f64>().sqrt();

    dot_prod / (mag_a * mag_b)
}

pub fn main() {
    let mut db: VectorDB = VectorDB::new();

    db.add_embedding(vec![0.1, 0.2, 0.3], "doc1".to_string());
    db.add_embedding(vec![0.1, 0.2, 0.4], "doc2".to_string());
    db.add_embedding(vec![0.1, 0.2, 0.5], "doc3".to_string());
    db.add_embedding(vec![0.1, 0.2, 0.6], "doc4".to_string());

    let query = vec![0.1, 0.2, 0.7];
    let result = db.search(&query).expect("No records found");

    // Encode the public values of the program.
    sp1_zkvm::io::commit::<Vec<f64>>(&query);
    sp1_zkvm::io::commit::<Vec<f64>>(&result.embedding());

    println!("Found result {}", result.value());
}
