"use strict";

const cheerio = require("cheerio");
const axios = require("axios");
const URL = "https://www.builtinnyc.com/jobs?f[0]=job-category_developer-engineer";

const scraperController = {

  getData: async (req, res, next) => {
    try {
      const response = await axios.get(URL);
      const data = response.data;
      res.locals = data;
      return next();
    } catch (err) {
      console.error(err)
    }
  },

  allPostings: async (req, res, next) => {
    try {
      const $ = await cheerio.load(res.locals);
      let jobTitles = [];

      // > JOBS OBJECT
      $('.center-main').each(function (i, el) {
        jobTitles.push({
          jobTitle: $('.title', el).text(),
          companyTitle: $('.company-title', el).text(),
          description: $('.description', el).text(),
          link: $('.bottom-row > .wrap-view-page > a', el).attr('href')
        });
      })

      res.locals = jobTitles;
      return next();
    } catch (err) {
      console.error(err);
    }
  }
};

module.exports = scraperController;
