#!/usr/bin/node

const fs = require('fs');

// Get the file path from the command-line arguments
const filePath = process.argv[2];

const stringToWrite = process.argv[3];

fs.writeFile(filePath, stringToWrite, 'utf-8', function (err) {
  if (err) {
    console.error(err);
  }
});
