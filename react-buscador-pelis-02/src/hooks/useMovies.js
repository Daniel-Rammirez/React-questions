import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const newSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (newSearch.current === search) {
      return;
    } else {
      newSearch.current = search;
    }
    const newMovies = await searchMovies({ search });
    setMovies(newMovies);
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => {
          //return  a.year - b.year; // sort por año
          return a.title.localeCompare(b.title); // sort por titulo
        })
      : movies;
  }, [sort, movies]);
  // const sortedMovies = sort
  //   ? [...movies].sort((a, b) => a.year - b.year)
  //   : movies;

  return { movies: sortedMovies, getMovies };
}
