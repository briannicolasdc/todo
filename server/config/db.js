let mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);
let db = "mongodb://127.0.0.1:27017/";

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(db, {useUnifiedTopology:true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log('Connected to DB');
    }catch(err){
        console.error(err.message);
    }
}

module.exports = connectDB;


