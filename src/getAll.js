exports.getAll = async (event) => {
  try {
    const users = [
      {id: 1, name: 'Laura', cedula: 1109887612},
      {id: 2, name: 'Matteo', cedula: 1109881212},
      {id: 3, name: 'Santiago', cedula: 998787612},
      {id: 4, name: 'Isabella', cedula: 231287612}
    ];
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


