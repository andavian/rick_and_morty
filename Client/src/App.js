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
import Favorites from "./components/Favorites/Favorites";

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/";
      const { data } = await axios(
        `${URL}login?email=${email}&password=${password}`
      );
      console.log(data);
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function logOut() {
    setAccess(false);
    navigate("/");
  }

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
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
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`)
  //     .then(({ data }) => {
  //       const isCharacterAlreadyAdded = characters.some(
  //         (character) => character.id === data.id
  //       );
  //       if (isCharacterAlreadyAdded) {
  //         window.alert("¡El personaje ya ha sido agregado!");
  //       } else {
  //         setCharacters((characters) => [...characters, data]);
  //       }
  //     })
  //     .catch((error) => window.alert(error.response.data.error));
  // }

  function onClose(id) {
    console.log(id);
    setCharacters((characters) =>
      characters.filter((character) => character.id !== id)
    );
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Landing login={login} />} />
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
