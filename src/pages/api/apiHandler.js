
export const handleApiRequest = async (method, url, body, headers) => {
    try {
      const res = await fetch(url, {
        method,
        headers: headers ? headers : {},
        body: body ? JSON.stringify(body) : undefined,
      });
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return { error: 'An error occurred' };
    }
  };
  