var express = require('express');
var router = express.Router();
const actorsController = require("../controllers/actorsController");

/* GET home page. */
router.get('/', actorsController.showIndex);

module.exports = router;
