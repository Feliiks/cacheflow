const router = require("express").Router();
const db = require("../../database/index.js");
// const HeadlessChromeScraper = require("../../services/puppeteer");

router.route("/userCompanies/:userUid").get(async (req, res) => {
  const userUid = req.params.userUid.toString();

  console.log(userUid);

  //   const scraper = await new HeadlessChromeScraper();
  //   await scraper.scrape();
  //   const topThreeOffenders = scraper.getTopThreeOffenders();
  //   console.log("Top 3 Offenders: ", topThreeOffenders);
  //   res.send(topThreeOffenders);
});

module.exports = router;
