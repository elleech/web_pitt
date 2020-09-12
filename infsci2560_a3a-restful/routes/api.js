// this js defines endpoints...

const express = require("express");
const router = express.Router();

// load my .json file (as fake database)
const countries = require("../data/countries.json");
const cities = require("../data/cities.json");

// get
router.get("/", (req, res, next) => {
  res
    .send({ message: "Succeed.", dataCountries: countries, dataCities: cities })
    .catch(next);
});

router.get("/countries", (req, res, next) => {
  res.send({ message: "Succeed.", dataCountries: countries }).catch(next);
});

router.get("/countries/:id", (req, res, next) => {
  let id = req.params.id;
  res.render("countries", { id, countries }).catch(next);
});

router.get("/cities", (req, res, next) => {
  res.send({ message: "Succeed.", dataCities: cities }).catch(next);
});

router.get("/countries/:id/cities", (req, res, next) => {
  let id = req.params.id;
  res.render("cities", { id, countries, cities }).catch(next);
});

// post
router.post("/countries", (req, res, next) => {
  let data = JSON.stringify(req.body);
  countries.push(JSON.parse(data));
  res
    .send({
      message: "Succeed.",
      dataCountries: countries
    })
    .catch(next);
});

router.post("/cities", (req, res, next) => {
  let data = JSON.stringify(req.body);
  cities.push(JSON.parse(data));
  res
    .send({
      message: "Succeed.",
      dataCities: cities
    })
    .catch(next);
});

// put
router.put("/countries/:id", (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  for (let item of countries) {
    if (item.id == id) {
      if (data.country) item.country = data.country;
      if (data.callingCode) item.callingCode = data.callingCode;
      if (data.populationDensity)
        item.populationDensity = data.populationDensity;
      if (data.timeZone) item.timeZone = data.timeZone;
      if (data.currency) item.currency = data.currency;
    }
  }
  res.send({ message: "Succeed.", dataCountries: countries }).catch(next);
});

// delete
router.delete("/countries/:id", (req, res, next) => {
  let id = req.params.id;
  /*
  let countryToRemove = countries.find(c => c.id === id);
  countries.remove(countryToRemove); // countries.remove() is not a function
  */
  countries.forEach(obj => {
    if (obj.key == id) {
      delete obj.id;
      delete obj.country;
      delete obj.callingCode;
      delete obj.populationDensity;
      delete obj.timeZone;
      delete obj.currency;
    }
  });
  res.send({ message: "Succeed.", dataCountries: countries }).catch(next);
});

module.exports = router;
