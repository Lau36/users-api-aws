const { v4 } = require('uuid');
const AWS = require('aws-sdk');

exports.create = async (event) => {
  try {
   
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { user_name, identification } = JSON.parse(event.body);
    const id = v4();

    const newUser = {
      id,
      user_name,
      identification
    };

    await dynamodb.put({
      TableName: 'UserTable',
      Item: newUser
    }).promise()

    return handleResponse(201, newUser);
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