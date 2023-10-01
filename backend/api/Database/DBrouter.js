const {SelectQueryController} = require("./DBController");
const router = require("express").Router();
router.post("/Query",SelectQueryController);

module.exports = router;