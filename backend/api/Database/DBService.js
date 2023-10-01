const pool = require("../../config/database");

module.exports = {
  GetQuery: (tag, callback) => {
    pool.query(
      `SELECT * FROM query WHERE tag = ? `,
      [tag],
      (error, results, fields) => {
        if (error || results.length == 0) {
          return callback(error);
        }
        return callback(null, results[0].query);
      }
    );
  },
  QueryImplementation: (req, callback) => {
    pool.query(req.Query, [req.param], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
};
