const {kafka} = require("./client");

// const produce = producerinit;
//data to to produce
const data = {
  "Name" : "Priya",
  "Id" : 100,
  "Food" : "Chicken Biryani",
  "Location" : "Pune"
}


async function producerinit(){
    const producer = kafka.producer();
    await producer.connect();
    console.log("Producer connected success")
   
    
    await producer.send({
        topic: "FoodDeliveryUpdates",
        messages: [
          {
            // partition: location.toLowerCase() === "north" ? 0 : 1,
            // partition: 0,
            key: "location-update",
            value: JSON.stringify(data),
          },
        ],
      });
    console.log("Producer Produced messages")
  
    }   

    const produce= producerinit();

    module.exports = produce;
