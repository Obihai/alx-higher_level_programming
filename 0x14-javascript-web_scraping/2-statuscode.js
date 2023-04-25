#!/usr/bin/node
const request = require('request');

const urlDisplay = process.argv[2];

request(urlDisplay, function (err, response) {
    if (err) {
        console.error(err);
    } else {
        console.log('code: ${response.statusCode}');
    }
});
