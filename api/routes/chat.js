const router = require("express").Router();
require("dotenv").config();

router.get("/config", (req, res) => {
  res.send({
    openAIKey: process.env.OPENAI_KEY,
  });
});

module.exports = router;
