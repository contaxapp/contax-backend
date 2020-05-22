import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    recordID: String,
    hashedRecordID: String,
    hashedContact: String, 
});

export const Contact = mongoose.model("Contact", contactSchema);