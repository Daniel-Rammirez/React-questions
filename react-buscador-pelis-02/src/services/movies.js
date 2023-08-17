export const searchMovies = async ({ search }) => {
  if (search == "") return;
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=4287ad07&s=${search}`
    );
    const json = await response.json();

    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (e) {
    throw new Error("Error searching movies");
    // setResponseMovies(noResults);
    //aca se setea las movies con noResults
    //pero no se muestra el mensaje de error
    //pues luego este json se pasa al componente Movies
    //que a su vez hace otro check de resultados
    //y ahi se ve si tiene un array con movies
    //si no tiene se muestra el mensaje de error por pantalla
  }
};
