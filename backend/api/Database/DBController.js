const { QueryImplementation, GetQuery } = require("./DBService");

module.exports = {
  SelectQueryController: (req, res) => {
    var result = {};
    GetQuery(req.body.tag, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      result["Query"] = results;
      result["param"] = req.body.param;

      QueryImplementation(result, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        return res.status(200).json({
          success: 1,
          data: results,
        });
      });
    });
  },
  UpdateQueryController: (req, res) => {
    var result = {};
    result["Query"] = GetQuery(req.body.tag, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      console.log(results);
      return results;
    });
    result["param"] = req.body.param;
    UpdateQuery(result, (err, results) => {
        if(err){
            console.log(err);
            return res.status(500).json({
                success:0,
                message:"Database connection error"
            })   
        }
        return res.status(200).json({
            success:1,
            data:results
        })
    });
  }, 
  DeleteQueryController: (req, res) =>{
    var result = {};
    result["Query"] = GetQuery(req.body.tag, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      console.log(results);
      return results;
    });
    result["param"] = req.body.param;
    DeleteQuery(result, (err, results) => {
        if(err){
            console.log(err);
            return res.status(500).json({
                success:0,
                message:"Database connection error"
            })   
        }
        return res.status(200).json({
            success:1,
            data:results
        })
    });
  }
};
