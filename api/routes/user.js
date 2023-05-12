const router = require("express").Router();
const User = require("../models/User");

//get a user
router.get("/", async (req, res) => {
  const email = req.query.email;
  try {
    const user = await User.findOne({ email: email });
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
