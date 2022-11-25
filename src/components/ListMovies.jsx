import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import Axios from "axios";

export const API_KEY = "795529ce925313d351621bea7bce49bf";

const ListMovies = () => {
  // const token = sessionStorage.getItem("token");

  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  // const [hasToken, setHasToken] = useState(false)


  const API_KEY = "795529ce925313d351621bea7bce49bf";
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR`;
  const URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=795529ce925313d351621bea7bce49bf&query=${inputSearch}&language=fr-FR&page=1`;

  const getMovies = () => {
    console.log(URL);
    Axios.get(URL)
      .then((res) => {
        const movie = res.data.results;

        console.log(movie);
        setMovies(movie);
      })
      .catch((error) => console.log("error = ", error));
  };

  const getSearch = () => {
    Axios.get(URL_SEARCH)
      .then((res) => {
        const searchMovie = res.data.results;

        console.log(searchMovie);
        setSearchMovies(searchMovie);
      })
      .catch((error) => console.log("error = ", error));
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    if (inputSearch != "") {
      getSearch();
    }
  }, [inputSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearch();
    setInputSearch("");
    console.log(inputSearch);
  };

  return (
    <div className="listmovies">
      <div className="search">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
          />

          <input id="button" type="submit" value="Rechercher" />
        </form>
      </div>
      <div className="listmovies">
        {searchMovies != ""
          ? searchMovies.map((movie, index) => (
              <Card key={index} movie={movie} />
            ))
          : movies.map((movie, index) => <Card key={index} movie={movie} />)}
      </div>
    </div>
  );
};

export default ListMovies;
