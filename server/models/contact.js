import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    hashedContact: String,
    customField: String 
});

export const Contact = mongoose.model("Contact", contactSchema);