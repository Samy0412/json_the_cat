const request = require("request");
const breedName = process.argv.slice(2);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
  (error, response, body) => {
    if (error) console.log(error);
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("Breed Not Found!");
      return;
    }
    console.log(data[0].description);
    //console.log(typeof data);
  }
);
