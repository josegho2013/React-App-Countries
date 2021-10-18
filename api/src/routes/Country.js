const { Router } = require("express");
const router = Router();
const {
    getAllCountry,
    searchByName,
    getCountryById,
    createActivity,
    countryDelete,
  
} = require("../controller/Country");

router.get("/", getAllCountry);
router.get("/name", searchByName);
router.get("/countriesDetail/:id", getCountryById);
router.delete("/countriesDelete/:id",countryDelete);
router.post("/create", createActivity);

module.exports = router;
