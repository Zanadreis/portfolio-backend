const mongoose = require('mongoose');

async function main(){
    const connectionString = process.env.CONNECTION_STRING
    await mongoose.connect(
        connectionString, 
        { 
            useNewUrlparser: true, 
            useUnifiedTopology: true 
        }
    ).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Something went wrong trying to connect to MongoDB');
        console.log(err);
    })
}

main().catch(err => console.log(err));

module.exports = mongoose;