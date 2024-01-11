// pages/api/request.js
import { handleApiRequest } from './api/apiHandler';

export default async function handler(req, res) {
  const { method, url } = req;

  try {
    const responseData = await handleApiRequest(method, url);

    res.status(200).json({ message: responseData.message || responseData.error });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
