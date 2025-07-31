// Simulate consumer
async function processJob(data, id) {
  console.log(`👷 Processing job: sendMessage:${id}`);
  console.log(`Sending Messsage to  ${data.recipient} Message:  ${data.message}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`✅ Job ${id} completed! \n`);
}

// Simulate producer and call consumer
async function runJobs() {
  for (let i = 1; i <= 100; i++) {
    const recipient = `recipient-${i}@gmail.com`;
    const data = {
      recipient,
      message: `Hello ${recipient}`
    }

    console.log(`✅ Job ${i} added for ${recipient}`);
    await processJob(data, i);
  }
}
runJobs();
