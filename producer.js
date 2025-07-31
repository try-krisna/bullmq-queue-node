import { Queue } from "bullmq";
import { connection } from "./redis-connection.js";

const messageQueue = new Queue("messageQueue", { connection });

async function addJob() {
  for (let i = 1; i <= 100; i++) {
    const recipient = `recipient-${i}@gmail.com`;
    const data = {
      recipient,
      message: `Hello ${recipient}`
    }
    const job = await messageQueue.add("sendMessage",  data);
    console.log(`✅ Job ${ job.id } added for ${ data.recipient }`);
    await new Promise((resolve)=>  setTimeout(resolve,1000))
  }
}

addJob();
