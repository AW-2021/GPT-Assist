const express = require("express");
const router = express.Router();
const Prompt = require('../models/Prompt');

// Middleware
router.use(express.json());


// Creating a new prompt
router.post('/', async (req, res) => {
    try{
        const newPrompt = new Prompt(req.body);
        await newPrompt.save();
        res.status(201).send(prompt);
        console.log('New prompt created: ', newPrompt);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
});

// Get all prompts
router.get('/', async (req, res) => {
    try {
        const category = req.query.category;
        const allprompts = category ? await Prompt.find({ category: category }) : await Prompt.find();
        res.send(allprompts);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/custom', async (req, res) => {
    try {
        const createdBy = req.query.promptUser;
        const allprompts = await Prompt.find({ createdBy: createdBy || "" });
        res.send(allprompts);
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
});

// Get a single prompt
router.get('/:id', async (req, res) => {
    try {
        const prompt = await Prompt.findById(req.params.id);
        if(!prompt) {
            return res.status(404).send();
        }
        res.send(prompt)
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;