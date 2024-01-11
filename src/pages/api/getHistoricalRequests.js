
import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  method: String,
  url: String,
  body: String,
  headers: String,
  response: String,
  createdAt: { type: Date, default: Date.now },
});

const Request = mongoose.model('Request', requestSchema);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const historicalRequests = await Request.find().sort({ createdAt: 'desc' });

    res.status(200).json(historicalRequests);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
