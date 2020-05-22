import express from "express";
const router = express.Router();
import Contact from "../models/Contact";


// POST contact data
router.post("/", function(req, res, next) {
  
  console.log(req.body);
  
  // Add DB part here
  var newContact = new Contact({
    recordID: "12345",
    hashedRecordID: "qqwweerrtt",
    hashedContact: "q1w2e3r4t5"
  });

  newContact.save((err) => {
    if (err) {
      console.log(err);
      return; 
    }
    console.log("Contact added to DB");
  });

  res.send("Contact data received");
});

// GET contact data from hashed recordID
router.get("/", function(req, res, next) {
  
  console.log(req.body);
  
  Contact.findOne({
    hashedRecordID: "qqwweerrtt"
  }, (err, foundContact) => {
    if (err) {
      console.log(err);
      return; 
    }

    else
      console.log(foundContact);
  });

  res.send("Contact data found");
});


export default router;