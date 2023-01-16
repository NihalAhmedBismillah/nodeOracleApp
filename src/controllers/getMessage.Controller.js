const dbOperation = require("./../lib/dbOperation");

module.exports.getMessageController = async (req, res) => {
  try {
    const resultSet = await dbOperation.getMessage();
    return  Promise.resolve(resultSet)
  } catch (error) {
    console.error("GET_MESSAGE_CONTROLLER:", JSON.stringify(error));
    return  Promise.reject(error);
  }
};
