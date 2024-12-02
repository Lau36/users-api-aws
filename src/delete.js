exports.delete = async (event) => {
try {
    return handleResponse(200, "Delete user working");
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
    