const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, status, origin, image, species, gender } = req.body;
  console.log(req.body);
  console.log(id, name, status, origin, image, species, gender);

  try {
    if (!id || !name || !origin || !status || !image || !species || !gender)
      return res.status(401).json({ mesage: "Faltan datos" });

    const [favorite, created] = await Favorite.findOrCreate({
      where: { name },
      defaults: { id, name, status, origin, image, species, gender },
    });
    const favorites = await Favorite.findAll();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
