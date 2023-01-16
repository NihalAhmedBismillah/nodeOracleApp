const { doDbConnection, doDbConnectionRelease } = require("./dbConnection");

module.exports.getMessage = async () => {
  let con = null;
  try {
    // con = await doDbConnection();
    // const resultSet = await con.execute("select query");
    // doDbConnectionRelease(con);
    // if (resultSet.rows.length) {
    //   return new Promise.resolve(resultSet.rows);
    // } else {
    //   return new Promise.resolve("No Data Found");
    // }
    return Promise.resolve({ data: { name: "ahmed", address: "mumbai" } });
  } catch (error) {
    if (con) {
      doDbConnectionRelease(con);
      console.error("ERROR_DB_OPERATION: ", JSON.stringify(error));
      return new Promise.reject(error);
    }
  }
};
