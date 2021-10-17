const { Router } = require('express');
const router = Router();
const RouterCountry = require("./Country");
const RouterActivity= require("./Activity");






router.use("/Country", RouterCountry)
router.use("/Activity", RouterActivity);

module.exports = router;
