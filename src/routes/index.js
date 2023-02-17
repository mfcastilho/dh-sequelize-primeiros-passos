var express = require('express');
var router = express.Router();
const actorsController = require("../controllers/actorsController");

/* GET home page. */
router.get('/', actorsController.showIndex);
router.get('/actors/index', actorsController.showActorsList);

router.get("/actors/:id", actorsController.showActor);

router.post("/actors/search", actorsController.searchActors);

module.exports = router;
