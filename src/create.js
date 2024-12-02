exports.create = async (event) => {
  try {
    const user = JSON.parse(event.body);
    return handleResponse(201, user);
  } catch (error) {
    return handleResponse(500, {message: error.message});
  }
};

const handleResponse = (statusCode, bodyResponse) => {
  const response = {
    statusCode: statusCode,
    body: JSON.stringify(bodyResponse),
  };
  return response;
};