import "./App.css";
import { useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        const isCharacterAlreadyAdded = characters.some(
          (character) => character.id === data.id
        );
        if (isCharacterAlreadyAdded) {
          window.alert("¡El personaje ya ha sido agregado!");
        } else {
          setCharacters((characters) => [...characters, data]);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          window.alert("¡No se encontró el personaje!");
        } else {
          window.alert("Ocurrió un error al buscar el personaje.");
        }
      });
  }

  function onClose(id) {
    console.log(id);
    setCharacters((characters) =>
      characters.filter((character) => character.id !== id)
    );
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
