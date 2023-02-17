const express = require("express");
const router = express.Router();

const actorsController = require("../controllers/actorsController");


router.get("/actors", actorsController.showAllActors);

router.post("/actors/search", actorsController.searchActors)

module.exports = router;