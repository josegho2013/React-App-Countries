const { Op } = require("sequelize");
const axios = require("axios");
const { Country, Activity } = require("../db");
const { v4: uuidv4 } = require("uuid");

async function getAllCountry(req, res, next) {
  try {
    const apiUrl = await axios.get(`https://restcountries.com/v2/all`);
    let apiInfo = await apiUrl.data.map((el) => {
      return {
        id: el.alpha3Code,
        name: el.name,
        flagImg: el.flag,
        continent: el.region,
        capital: el.capital,
        subregion: el.subregion,
        population: el.population,
      };
    });
   

    let dataBase = await Country.findAll({
      attributes: ["id", "name", "flagImg", "continent", "subregion", "population"],
      include: [
        {
          model: Activity,
          through: {
            attributes: [],
          },
        },
      ],
    });

    let response = dataBase.concat(apiInfo);
    // let response = apiInfo.concat(dataBase);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

async function searchByName(req, res, next) {
  const search = req.query.q;

  try {
    let dataBase = await Country.findAll({
      where: {
        name: { [Op.like]: `%${search}%` },
      },
      attributes: ["id", "name", "flagImg", "continent", "subregion", "population"],
      include: [
        {
          model: Activity,
          through: {
            attributes: [],
          },
        },
      ],
    });

    const apiUrl = await axios.get(
      `https://restcountries.com/v2/name/${search} `
    );
    let apiInfo = await apiUrl.data.map((el) => {
      return {
        id: el.alpha3Code,
        name: el.name,
        flagImg: el.flag,
        continent: el.region,
        capital: el.capital,
        subregion: el.subregion,
        population: el.population,
      };
    });

    let response = apiInfo.concat(dataBase);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}
async function getCountryById(req, res, next) {
  const id = req.params.id;

  if (id.includes("-")) {
    try {
      const countryId = await Country.findByPk(id, {
        include: [
          {
            model: Activity,
            through: {
              attributes: [],
            },
          },
        ],
      });
      return res.status(200).json(countryId);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v2/all/${id}`
      );

      let country = {
        id: data.id,
        name: data.name,
        flagImg: data.flagImg,
        continent: data.continent,
        capital: data.capital,
        subregion: data.subregion,
        population: data.population,
      };
      return res.status(200).json(country);
    } catch (error) {
      next(error);
    }
  }
}

async function createActivity(req, res) {
  let { name, difficulty, duration, season, countries } = req.body;

  try {
    let activityCreated = await Activity.create({
      id: uuidv4(),
      name,
      difficulty,
      duration,
      season,
      image,
    });

    if (countries.length > 0) {
      countries.forEach(async (countries) => {
        try {
          let dbCountries = await Country.findOne({
            where: { name: countries },
          });
          activityCreated.addCountry(dbCountries);
        } catch (error) {
          next(error);
        }
      });
    }

    return res.status(200).send("Creacion exitosa");
  } catch (error) {
    return res.send(error);
  }
}

async function countryDelete(req, res, next) {
    const id = req.params.id;
  
    if (id.includes("-")) {
      try {
        const dogId = await Activity.destroy({
          where: { id },
        });
  
        return res.sendStatus(200);
      } catch (error) {
        next(error);
      }
    } else {
      return res.status(404).send("Can´t delete this dog!");
    }
  }


module.exports = {
  getAllCountry,
  searchByName,
  getCountryById,
  createActivity,
  countryDelete,
};
