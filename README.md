# Array Merge API

Simple TypeScript API that merges and sorts three arrays using Elysia and Bun.

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Run the server
bun run dev

# Run tests
bun test


Project Structure
ts-merge-project/
├── package.json
├── tsconfig.json 
├── src/
│   ├── merge.ts
│   └── server.ts
└── test/
    └── merge.test.ts

API Usage
POST /merge
Merges and sorts three arrays of integers.

Request:curl -X POST http://localhost:3000/merge \
  -H "Content-Type: application/json" \
  -d '{
    "collection_1": [1, 4, 7],
    "collection_2": [2, 5, 8],
    "collection_3": [9, 6, 3]
  }'

  Response:{
  "result": [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

Built With
Bun - JavaScript runtime & package manager
Elysia - TypeScript web framework
TypeScript# testprimo
