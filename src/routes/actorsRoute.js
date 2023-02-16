const express = require("express");
const router = express.Router();

const actorsController = require("../controllers/actorsController");


router.get("/actors", actorsController.showAllActors);
router.get("/actors/:id", actorsController.showActor);


module.exports = router;