const { Kafka } = require("kafkajs");
// // Create the client with the broker list
exports.kafka = new Kafka({
    clientId: "myapp",
    brokers:["192.168.1.102:9092","localhost:9093","localhost:9094"],
});
