const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({

    category: { 
        type: String, 
        required: true, 
        enum: ['Social Media', 'YouTube', 'Twitter', 'Blog Articles', 'Copy Writing', 'LinkedIn', 'Others', 'Custom', 'professional','personal', 'question', 'response', 'joke', 'quote', 'fact', 'news', 'event', 'feedback'],
    },
    content: {
        type: String,
        required: true,
    },
    userAccessType: {
        type: String,
        required: true,
        enum: ['free', 'premium'],
        default: 'free',
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }

});

const Prompt = mongoose.model('Prompt', promptSchema);
module.exports = Prompt;