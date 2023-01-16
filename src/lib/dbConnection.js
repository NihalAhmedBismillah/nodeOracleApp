const oracledb = require("oracledb");
const config = require("../../config.json");

const doDbConnection = async () => {
  try {
    const connection = await oracledb.getConnection({
      user: config.dbConfig.userName,
      password: config.dbConfig.dbPwd,
      connectString: `${config.dbConfig.dbBaseUrl}/${config.dbConfig.dbName}`,
    });
    console.log("connected to database");
    return  Promise.resolve(connection);
  } catch (err) {
    console.error(err.message);
    return  Promise.reject(err);
  }
};

const doDbConnectionRelease = (connection) => {
  connection.release(function (err) {
    if (err) {
      console.error(err.message);
    }
  });
};

module.exports = {doDbConnection,doDbConnectionRelease};
