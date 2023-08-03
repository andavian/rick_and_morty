const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const getCharByName = require("../controllers/getCarByName");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.get("/character", getCharByName);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
