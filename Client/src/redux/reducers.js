import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, CLEAR } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case FILTER:
      if (action.payload === "All") {
        return { ...state, myFavorites: state.allCharacters };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.filter(
            (character) => character.gender === action.payload
          ),
        };
      }

    case ORDER:
      if (action.payload === "A") {
        return {
          ...state,
          myFavorites: [...state.allCharacters].sort((a, b) => a.id - b.id),
        };
      } else if (action.payload === "D") {
        return {
          ...state,
          myFavorites: [...state.allCharacters].sort((a, b) => b.id - a.id),
        };
      } else {
        return {
          ...state,
        };
      }
    case CLEAR:
      return initialState;

    default:
      return { ...state };
  }
}
