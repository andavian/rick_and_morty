import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const CLEAR = "CLEAR";

export function addFav(character) {
  const endpoint = "rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function removeFav(id) {
  const endpoint = "rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

export function clear() {
  return {
    type: CLEAR,
  };
}
