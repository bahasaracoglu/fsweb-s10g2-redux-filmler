export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id) => {
  console.log(id);
  return { type: DELETE_MOVIE, payload: id };
};

export const addMovie = (movie) => {
  console.log(movie);
  return { type: ADD_MOVIE, payload: movie };
};
