import { WorkerMLCEngine } from "@mlc-ai/web-llm";

const engine = new WorkerMLCEngine();

self.onmessage = (event) => {
  engine.onmessage(event);
};
