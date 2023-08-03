const axios = require("axios");

const URL_BASE = "https://rickandmortyapi.com/api/character/";

const getCharByName = async (req, res) => {
  // const { id } = req.params
  const { charName } = req.query;
  try {
    const { data } = await axios(URL_BASE);
    const { results } = data;

    const propiedadesPersonajes = results.map((personaje) => {
      const { id, name, status, species, gender, origin, image } = personaje;
      return { id, name, status, species, gender, origin: origin.name, image };
    });

    const nameFinding = propiedadesPersonajes.filter((character) =>
      character.name.toLowerCase().includes(charName.toLowerCase())
    );

    if (nameFinding.length === 0) {
      return res.status(400).send("No existe personaje con ese nombre");
    }

    return res.status(200).json(nameFinding);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  } finally {
    res.end();
  }
};

module.exports = getCharByName;
