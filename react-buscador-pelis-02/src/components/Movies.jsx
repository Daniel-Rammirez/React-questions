export function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((mov) => (
        <li className="movie" key={mov.id}>
          <h3>{mov.title}</h3>
          <p>{mov.year}</p>
          <img src={mov.poster} alt={mov.title} />
        </li>
      ))}
    </ul>
  );
}

export function NoMoviesResults() {
  return <p>{"Movie not found! 🥶"}</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}

//quiero mostrar las pelis primero del json
// luego, si no hay resultados en la busqueda, mostrar el noResults
