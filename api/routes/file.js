const router = require("express").Router();
const File = require("../models/File");

//create a file
router.post('/create', async (req, res) => {
    try {
      const { name, text, uploadedBy } = req.body;
      const newFile = await File.create({ name, text, uploadedBy });
      await newFile.save();
      res.status(200).json(newFile);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
});

//get files of a user
router.get("/", async (req, res) => {  
    try {
      const userID = req.query.userID;
      const files = await File.find({ uploadedBy: userID });
      res.status(200).json(files);
    } catch (err) {
      return res.status(500).json(err);
    }
});
  

module.exports = router;
