const initialState = {
  favorites: [],
  displayFavorites: true,
};

const favoritesReducer = (state = initialState, action) => {
  console.log("böyle bi şey geldi:", action);
  switch (action.type) {
    /*case "DELETE_MOVIE":
     return {
          ...state,
          movies: state.movies.filter(
            (item) => parseInt(action.payload) !== item.id
          ),
        };

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
