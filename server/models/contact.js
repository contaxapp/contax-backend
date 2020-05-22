import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    recordID: String,
    hashedRecordID: String,
    hashedContact: String, 
});

const contact = mongoose.model("Contact", contactSchema);

module.exports = contact;