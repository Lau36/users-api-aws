const AWS = require('aws-sdk');

exports.update = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const { user_name, identification } = JSON.parse(event.body);
        const { id } = event.pathParameters;

        await dynamodb.update({
            TableName: 'UserTable',
            Key: { id },
            UpdateExpression: 'set user_name = :user_name, identification = :identification',
            ExpressionAttributeValues:{
                ':user_name': user_name,
                ':identification': identification
            },
            ReturnValues: 'ALL_NEW'

        }).promise();

        return handleResponse(200, "User updated!");
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
