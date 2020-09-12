// this js defines endpoints...

const express = require("express");
const router = express.Router();

// load data models
const Countries = require("../models/countries");
const Cities = require("../models/cities");

// get
router.get("/", (req, res, next) => {
  Countries.find({})
    .then(countries => {
      Cities.find({}).then(cities => {
        res.render("database", { countries, cities });
      });
    })
    .catch(next);
});

router.get("/countries", (req, res, next) => {
  Countries.find({})
    .then(countries => {
      res.render("countries", { countries });
    })
    .catch(next);
});

router.get("/countries/:code", (req, res, next) => {
  let code = req.params.code; // cannot use req.params.code directly inside findOne().then(render())
  Countries.findOne({ code: code })
    .then(country => {
      res.render("countryByCode", { code, country });
    })
    .catch(next);
});

router.get("/cities", (req, res, next) => {
  Cities.find({})
    .then(cities => {
      res.render("cities", { cities });
    })
    .catch(next);
});

router.get("/countries/:code/cities", (req, res, next) => {
  let code = req.params.code;
  let msg = "";

  // first use the code to search for country in Countries
  // then pass that country to Cities, also create a dummy cities
  Countries.findOne({ code: code })
    .then((country, cities) => {
      if (country) {
        // case 1: if country exists
        msg = "found";
        Cities.find({ country: country.country }).then(cities =>
          res.render("citiesByCode", { code, msg, country, cities })
        );
      } else {
        // case 2: if country doesn't exist
        msg = "na";
        res.render("citiesByCode", { code, msg, country, cities });
      }
    })
    .catch(next);
});

// post
router.post("/countries", (req, res, next) => {
  Countries.create(req.body)
    .then(country => {
      res.send(country);
    })
    .catch(next);
});

router.post("/cities", (req, res, next) => {
  Cities.create(req.body)
    .then(city => {
      res.send(city);
    })
    .catch(next);
});

// put
router.put("/countries/:code", (req, res, next) => {
  let code = req.params.code;
  Countries.findOneAndUpdate({ code: code }, req.body)
    .then(() => {
      Countries.findOne({ code: code }).then(country => {
        res.send(country);
      });
    })
    .catch(next);
});

// delete
router.delete("/countries/:code", (req, res, next) => {
  Countries.findOneAndRemove({ code: req.params.code })
    .then(country => {
      res.send(country);
    })
    .catch(next);
});

// search
router.get("/search", (req, res, next) => {
  const query = req.query.query;
  let msg = "";

  Countries.findOne({ country: query })
    .then(country => {
      Cities.findOne({ city: query }).then((city, cities) => {
        // case 1: if query is a name of a country -> return matched data in Countries and Cities
        if (country) {
          msg = "country";
          Cities.find({ country: query }).then(cities => {
            res.render("search", { query, msg, country, city, cities });
            return;
          });
        }

        // case 2: if query is a name of a city -> return matched data in Cities
        if (city) {
          msg = "city";
          res.render("search", { query, msg, country, city, cities });
          return;
        }

        // case 3: if query is not in any database -> return ?
        if (!country && !city) {
          msg = "na";
          res.render("search", { query, msg, country, city, cities });
          return;
        }
      });
    })
    .catch(next);
});

module.exports = router;
