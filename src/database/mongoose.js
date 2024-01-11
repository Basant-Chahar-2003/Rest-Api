// mongoose.js
import mongoose from 'mongoose';
// const mongoose = require("mongoose")

const MONGODB_URI = 'mongoDbUrl';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const requestSchema = new mongoose.Schema({
    method: String,
    url: String,
    body: String,
    headers: String,
    response: String,
    createdAt: { type: Date, default: Date.now },
  });
  
 export const Request = new mongoose.model('Request', requestSchema);



const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default mongoose;


