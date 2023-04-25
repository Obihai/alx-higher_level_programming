#!/usr/bin/node

const fs = require('fs');

// Get the file path from the command-line arguments
const filePath = process.argv[2];

// Read the contents of the file
fs.readFile(filePath, 'utf-8', function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
