const AWS = require('aws-sdk');
exports.delete = async (event) => {
try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    console.log("ID", id);

    await dynamodb.delete({
        TableName: 'UserTable',
        Key: {
            id,
        },
        }).promise();

    return handleResponse(200, "User deleted!");
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
    
