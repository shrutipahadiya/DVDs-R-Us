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
  let filteredMovies = movies;
  switch (filter) {
    case 'All':
      filteredMovies = movies;
      break;
    default:
      filteredMovies = movies.filter((movie) => movie.genres.includes(filter));
  }
  switch (sort) {
    case 'A-Z':
      filteredMovies = movies.sort(
        (a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1),
      );
      break;
    case 'Z-A':
      filteredMovies = movies.sort(
        (a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1),
      );
      break;
    case 'Highest Rated':
      filteredMovies = movies.sort((a, b) => (a.rating < b.rating ? 1 : -1));
      break;
    case 'Lowest Rated':
      filteredMovies = movies.sort((a, b) => (a.rating > b.rating ? 1 : -1));
      break;
    case 'Released (Most Recent)':
      filteredMovies = movies.sort((a, b) => (a.released < b.released ? 1 : -1));
      break;
    case 'Released (Oldest)':
      filteredMovies = movies.sort((a, b) => (a.released > b.released ? 1 : -1));
      break;
    default:
      filteredMovies = movies;
  }
  return filteredMovies;
};
