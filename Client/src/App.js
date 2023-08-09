import "./App.css";
import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./vistas/About/About";
import Detail from "./vistas/Detail/Detail";
import Error from "./vistas/Error/Error";
import Landing from "./vistas/Landing/Landing";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clear } from "./redux/action";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const dispatch = useDispatch();

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/";
      const { data } = await axios(
        `${URL}login?email=${email}&password=${password}`
      );

      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  }

  async function register(userData) {
    try {
      const URL = "http://localhost:3001/rickandmorty/";
      await axios.post(`${URL}login`, userData);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function logOut() {
    setAccess(false);
    navigate("/");
    setCharacters([]);
    dispatch(clear());
  }

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      console.log(data);
      const isCharacterAlreadyAdded = characters.some(
        (character) => character.id === data.id
      );
      if (isCharacterAlreadyAdded) {
        alert("¡El personaje ya ha sido agregado!");
      } else {
        setCharacters((characters) => [...characters, data]);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  async function onSearchByName(charName) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character?charName=${encodeURIComponent(
          charName
        )}`
      );

      const isCharacterAlreadyAdded = characters.some(
        (character) => character.id === data.id
      );
      if (isCharacterAlreadyAdded) {
        alert("¡El personaje ya ha sido agregado!");
      } else {
        setCharacters((characters) => [...characters, ...data]);
        console.log("characters", characters);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  function onClose(id) {
    setCharacters((characters) =>
      characters.filter((character) => character.id !== id)
    );
  }

  const cleanCharacters = () => {
    setCharacters([]);
  };

  return (
    <div className="App">
      <Nav
        onSearch={onSearch}
        onSearchByName={onSearchByName}
        cleanCharacters={cleanCharacters}
        logOut={logOut}
      />
      <Routes>
        <Route
          path="/"
          element={<Landing login={login} register={register} />}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
