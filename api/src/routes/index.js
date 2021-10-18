const { Router } = require('express');
const router = Router();
const RouterCountry = require("./Country");
const RouterActivity= require("./Activity")

router.use("/countries", RouterCountry)
router.use("/activities", RouterActivity);

module.exports = router;
