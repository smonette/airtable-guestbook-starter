// server.js
// where your node app starts

// We're going to use the "Product Catalog and Orders" base template:
// https://airtable.com/templates/featured/expZvMLT9L6c4yeBX/product-catalog-and-orders
var Airtable = require('airtable');
var base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);
var tableName = 'signs';

var express = require('express');
var app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({   
  extended: true
})); 

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Cache the records in case we get a lot of traffic.
// Otherwise, we'll hit Airtable's rate limit.
var cacheTimeoutMs = 5 * 1000; // Cache for 5 seconds.
var cachedResponse = null;
var cachedResponseDate = null;

app.post("/submit", function(request, response) {
  const name = request.body.name
  const email = request.body.email
  const comment = request.body.comment
  const location = request.body.location
  
  base('Guestbook').create({
    "Name": name,
    "Email": email,
    "Location": location,
    "Comment": comment

}, {typecast: true}, function(err, record) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(record.getId());
      response.sendFile(__dirname + '/views/success.html');

});
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});