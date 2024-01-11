// components/RestClient.js
import React, { useState } from 'react';
import { handleApiRequest } from '../pages/api/apiHandler';

const RestClient = () => {
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');
  const [headers, setHeaders] = useState('');
  const [response, setResponse] = useState('');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleHeadersChange = (e) => {
    setHeaders(e.target.value);
  };

  const handleRequest = async (method) => {
    try {
      const headersObject = headers ? JSON.parse(headers) : undefined;
      const bodyObject = body ? JSON.parse(body) : undefined;

      const responseData = await handleApiRequest(method, url, bodyObject, headersObject);
      setResponse(responseData.msg || responseData.error);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred');
    }
  };

  return (
    <div>
      <label>
        URL:
        <input type="text" value={url} onChange={handleUrlChange} />
      </label>

      <label>
        Body:
        <textarea value={body} onChange={handleBodyChange} />
      </label>

      <label>
        Headers:
        <textarea value={headers} onChange={handleHeadersChange} />
      </label>

      <button onClick={() => handleRequest('GET')}>Send GET Request</button>
      <button onClick={() => handleRequest('PUT')}>Send PUT Request</button>
      <button onClick={() => handleRequest('POST')}>Send POST Request</button>
      <button onClick={() => handleRequest('DELETE')}>Send DELETE Request</button>

      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default RestClient;
