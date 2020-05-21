import express from 'express';
var router = express.Router();
const contact = require('../models/contact');


// POST contact data
router.post('/', function(req, res, next) {
  
  console.log(req.body);
  
  // Add DB part here
  var newContact = new contact({
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

export default router;