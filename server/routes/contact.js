import express from 'express';
var router = express.Router();

/* GET home page. */
router.post('/contact', function(req, res, next) {
  console.log(req.body);
  res.send("Contact data received");

  // Add DB part here
});

export default router;