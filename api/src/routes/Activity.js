const { Router } = require("express");
const router = Router();
const { allActivity } = require("../controller/Activity");

router.get("/", allActivity);

module.exports = router;
