// pages/api/apiHandler.js
const {mongoose , Request} = require('../../database/mongoose');




export const handleApiRequest = async (method, url, body, headers) => {
  try {
    const res = await fetch(url, {
      method,
      headers: headers ? headers : {},
      body: body ? JSON.stringify(body) : undefined,
    });

    const responseData = await res.json();

    // Store historical request in MongoDB
    await Request.create({
      method,
      url,
      body: body ? JSON.stringify(body) : null,
      headers: headers ? JSON.stringify(headers) : null,
      response: JSON.stringify(responseData),
    });

    return responseData;
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred' };
  }
};
