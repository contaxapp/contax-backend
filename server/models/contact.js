const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    recordID: String,
    hashedRecordID: String,
    hashedContact: String, 
});

const contact = mongoose.model('contact', contactSchema);

module.exports = contact;