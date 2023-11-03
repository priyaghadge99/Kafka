const { kafka } = require("./client"); //importing library

async function init(){   //funtion defination
    const admin =kafka.admin();
    admin.connect();
    console.log("admin Connection successful")

    await admin.createTopics({  // function to create topic
        topics:[
            {
                topic : "Food-DeliveryUpdate",
                numPartitions: 2,
            },
        ],
    });

    console.log("Topic created :Food- DeliveryUpdate")

    await admin.disconnect();
}

init();  //function calling