const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const contractorRegistration = require("../controllers/contractorRegistration");
const contractorSignIn = require("../controllers/contractorSignIn");
const sendQuotes = require("../controllers/sendQuotes");
const reviewingSentQuotes = require("../controllers/reviewingSentQuotes");
const contractorGetsQuotes = require("../controllers/ConsumerGetsQuotes");

router.use(bodyParser.json());

router.post("/register", contractorRegistration);
router.post("/signin", contractorSignIn);
router.post("/sendquotes", sendQuotes);
router.put("/quotes", reviewingSentQuotes);
router.get("/quotes", contractorGetsQuotes);

module.exports = router;