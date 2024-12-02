const AWS = require('aws-sdk');
exports.getAll = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

   const result = await dynamodb.scan({
      TableName: 'UserTable',
    }).promise();

    const users = result.Items

    return handleResponse(200, users);
  } catch (error) {
    return handleResponse(500, {message: error.message});;
  }
};

const handleResponse = (statusCode, bodyResponse) => {
  const response = {
    statusCode: statusCode,
    body: JSON.stringify(bodyResponse),
  };
  return response;
};


