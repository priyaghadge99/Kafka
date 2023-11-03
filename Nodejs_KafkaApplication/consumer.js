const {kafka} = require("./client");



// const consume =  consumerinit;
async function consumerinit() {
const consumer = kafka.consumer({groupId: "Groupmultibrokercluster"});

await consumer.connect();

console.log("Consumer Connected Sucessfully");

await consumer.subscribe({topic: "FoodDeliveryUpdates",fromBeginning:true});

await consumer.run( {
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
        // console.log(
        //   `${groupId}: ${topic}: PART:${partition}:`,
        //   message.value.toString()
        // )
       

        console.log({topic , partition,
            value: message.value.toString(),
          })
      },
});


}

// await producer.disconnect();


const consume=consumerinit();
module.exports = consume;