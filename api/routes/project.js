const router = require("express").Router();
const Project = require("../models/Project");

//create a project
router.post('/create', async (req, res) => {
    try {
      const { name, description,files,createdBy } = req.body;
      const newProject = await Project.create({ name, description,files,createdBy });
      await newProject.save();
      res.status(200).json(newProject);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
});

//get projects of a user
router.get("/", async (req, res) => {  
    try {
      const userID = req.query.userID;
      const projects = await Project.find({ createdBy: userID });
      res.status(200).json(projects);
    } catch (err) {
      return res.status(500).json(err);
    }
});

module.exports = router;
