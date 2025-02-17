import { Elysia } from "elysia";
import { merge } from "./merge";

const app = new Elysia();

app.post("/merge", async ({ body }) => {
  // Expect body to be JSON with keys: collection_1, collection_2, collection_3
  const { collection_1, collection_2, collection_3 } = body as {
    collection_1: number[];
    collection_2: number[];
    collection_3: number[];
  };
  const result = merge(collection_1, collection_2, collection_3);
  return { result };
});

app.get("/", () => {
  return "Hello World";
});

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));