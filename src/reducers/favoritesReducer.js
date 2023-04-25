import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const favoritesReducer = (state = initialState, action) => {
  console.log("böyle bi şey geldi:", action);
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    /*
      case ADD_MOVIE:
       return {
          ...state,
          movies: [...movies, action.payload],
        };*/

    default:
      return state;
  }
};

export default favoritesReducer;
