const request = require('request');
const fs = require('fs');

request('http://www.example.edu/', (error, response, body) => {
  // Print the error if one occurred
  // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile('/Users/frankshen/lighthouse/page-fetcher/index.html', body, err => {
    if (err) {
      console.error(err);
    }// file written successfully
    else{
      console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
    }
  });
});




