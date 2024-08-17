# ZK-Vector-DB

## Overview

This is a proof of concept for a decentralized vector database.

### Motivation

Existing market options and drawbacks:

1. [Perplexity.ai](https://www.perplexity.ai/) is an amazing AI-powered search engine

   - TLDR: an LLM that is focused on summarizing relevant websites and cites its sources
   - But it's centralized. Why is this an issue?
   - Lack of privacy; web search data is often a cornerstone of demographic modeling for big tech
   - Reliance on the company to maintain data quality and continually process new websites

2. Privacy-focused search engines: decentralized ones like Presearch, self-hosted ones like Searx, etc.
   - Not popular, often due to poor results quality: low relevance or not returning latest websites

The end goal for this PoC is a decentralized version of Perplexity, which simultaneously solves the problems in the prior options.

### Proposal

The project is split into two components:

1. Self-hosted LLM
   - users are free to use whatever models they want to do summarization, including self-hosted open-source models like Llama
   - due to the nature of the UX, half of the results quality concerns are handled by the LLM itself (fixable in prompt engineering)
2. Decentralized vector database
   - a public DB for website results, for the users
   - assuming appropriate incentives
   - users can freely host nodes
   - users can contribute new websites to the DB, addressing the concerns with data availability

This repo contains a webapp to demonstrate the end use case with the LLM, as well as a simple vector database built in Rust.

## Codebase

### Webapp PoC

#### TLDR on RAG

Retrieval Augmented Generation is a general term / technique. Information that is relevant to the query is provided as direct, additional context for the model.

For LLMs, this is usually best achieved by using embeddings and vector databases.

- An embedding is a vector of floats. An embedding model takes a string input and returns an embedding, which encodes the "meaning" and semantics of the string input.
- A vector database stores vectors, and is designed in particular for fast, efficient similarity search.

The process for RAG LLM is roughly:

1. user sends their input query
2. embedding model returns an embedding from the query
3. vector database returns top-n relevant documents based on embedding similarity
4. documents are prepended to the LLM query
   - probably with some instructions like "The following is a list of documents that may provide additional context for the user ask." etc.

#### Setup

// TODO
Install Ollama, install a model (ex. Llama 3.1), have Node.js, etc.

#### Run

// TODO

### Vector DB abstract

The decentralized vector DB has two engineering barriers:

ZK proof of embedding model: ideally, the network computes the output of the embedding model. This is probably a ~100M parameter neural network. ZKML proofs exist today, but are slow.

Systems design is a question mark: decentralized databases and vector databases probably have extremely different architectures; combining them is beyond the scope of a 2 day hackathon.

We built on Succinct SP1. In theory, it is feasible to build ZKML, and if a DB architecture exists, SP1 takes away the difficulties of building proving circuits for it.

The code provided is essentially just storing vectors in program memory. Although just an abstraction for the end use-case, it shows it is feasible to do a ZK proof on vector DB execution!

#### Prerequisites

Ensure you have Rust and [Succinct SP1](https://github.com/succinctlabs/sp1) installed.

#### Prove and verify

Build the program

```bash
/vectordb/program$    cargo prove build
```

Execute the proving script

```bash
/vectordb/script$    RUST_LOG=info cargo run --release
```

### How to run Webapp
You need to have [ollama](https://ollama.com/download) installed and running
#### Frontend
```
cd frontend
npm i
npm run start
```

#### Backend
```
cd backend
npm i
node app.js
```
