import { Worker } from "bullmq";
import { connection } from "./redis-connection.js";
const worker = new Worker(
  "messageQueue",
  async (job) => {
    console.log(`👷 Processing job: ${job.name}:${job.id}`);
    console.log(`Sending Messsage to  ${job.data.recipient} Message:  ${job.data.message}`);
    await new Promise((resolve) => setTimeout(resolve, 1000))
  },
  { connection }
);

worker.on("completed", (job) => {
  console.log(`✅ Job ${job.id} completed!`);
});

const shutdown = async () => {
  await worker.close();
  console.log(`worker:${worker.name} have been stopped`);
  process.exit(0);
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
