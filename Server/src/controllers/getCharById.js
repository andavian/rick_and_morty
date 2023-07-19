const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const character = {
        id: id,
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
        origin: response.data.origin.name,
        image: response.data.image,
        status: response.data.status,
      };
      res.writeHead(200, "Content-type: application/json");
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, "Content-type: text/plain");
      res.end(error.message);
    });
};

module.exports = {
  getCharById,
};
