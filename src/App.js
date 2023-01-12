import "./App.css";
import { movie, searchMovie } from "./Api";
import { useEffect, useState } from "react";

const App = () => {
  // state tampung data api nya
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movie().then((res) => {
      setMovies(res);
    });
  }, []);

  // mapdata Api
  const ListMovie = () => {
    return movies.map((res, i) => {
      return (
        <div key={i} className="wrapper">
          <div className="movie-title">{res.title}</div>
          <img
            className="img"
            src={`${process.env.REACT_APP_IMG}/${res.poster_path}`}
            alt=""
          />
          <div className="date">{res.release_date}</div>
          <div className="rate">{res.vote_average}</div>
        </div>
      );
    });
  };

  // q adalah untuk menampung querry dari inputannya
  // value dari inputan dijadikan queery untuk hitting point
  const search = async (q) => {
    if (q.length > 4) {
      const find = await searchMovie(q);
      setMovies(find.results);
    }
  };

  const confirmSearch = () => {
    alert("COMING SOON");
  };

  // console.log({ movies: movies });

  return (
    <div className="App">
      <header onSubmit={confirmSearch} className="App-header">
        <p>BELAJAR</p>
        <form>
          <input
            className="search"
            placeholder="search..."
            onChange={({ target }) => search(target.value)}
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>

        <div className="container">
          <ListMovie />
        </div>
      </header>
    </div>
  );
};

export default App;
