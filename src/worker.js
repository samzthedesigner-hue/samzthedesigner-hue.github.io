import { Worker } from "@mlc-ai/web-llm";

const engine = new Worker();

self.onmessage = (msg) => {
  engine.onmessage(msg);
};
