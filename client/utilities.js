export const generateGenres = (movies) => {
  const genreArray = [];
  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (!genreArray.includes(genre)) {
        genreArray.push(genre);
      }
    });
  });
  return genreArray;
};

export const movieFilter = (movies, filter, sort) => {
  // let filteredMovies = movies;
  let filteredMovies = movies;
  switch (filter) {
    case 'All':
      filteredMovies = filteredMovies; // eslint-disable-line no-self-assign
      break;
    default:
      filteredMovies = filteredMovies.filter((movie) => movie.genres.includes(filter));
  }
  switch (sort) {
    case 'A-Z':
      filteredMovies = filteredMovies.sort((a, b) => (
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      ));
      break;
    case 'Z-A':
      filteredMovies = filteredMovies.sort((a, b) => (
        a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
      ));
      break;
    case 'Highest Rated':
      filteredMovies = filteredMovies.sort((a, b) => (a.rating < b.rating ? 1 : -1));
      break;
    case 'Lowest Rated':
      filteredMovies = filteredMovies.sort((a, b) => (a.rating > b.rating ? 1 : -1));
      break;
    case 'Released (Most Recent)':
      filteredMovies = filteredMovies.sort((a, b) => (a.released < b.released ? 1 : -1));
      break;
    case 'Released (Oldest)':
      filteredMovies = filteredMovies.sort((a, b) => (a.released > b.released ? 1 : -1));
      break;
    default:
      filteredMovies = filteredMovies; // eslint-disable-line no-self-assign
  }
  return filteredMovies;
};
