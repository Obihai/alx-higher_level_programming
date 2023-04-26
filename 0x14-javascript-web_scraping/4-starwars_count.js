#!/usr/bin/node

const request = require('request');

const baseUrl = process.argv[2];
const characterId = '18';

request(`${baseUrl}?format=json`, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    const movies = data.results.filter(movie => movie.characters.includes(`${baseUrl}/people/${characterId}/`));
    console.log(movies.length);
  }
});
