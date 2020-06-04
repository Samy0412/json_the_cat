const request = require("request");

const fetchBreedDescription = function (breedName, callBack) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callBack(error, null);
      } else if (JSON.parse(body)[0] === undefined) {
        callBack("Breed not found", null);
      } else {
        callBack(null, JSON.parse(body)[0].description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
