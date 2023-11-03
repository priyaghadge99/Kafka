const producer = require('./produce');
const consumer = require('./consume');


// call the `produce` function and log an error if it occurs
producer().catch((err) => {
	console.error("error in producer: ", err)
});


consumer().catch((err)=>{
    console.error("error in consumer: ", err)

});