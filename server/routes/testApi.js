var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API SERVER is working on port 9000.")
})

module.exports = router;