import "./App.css";
import { movie, searchMovie } from "./Api";
import { useEffect, useState } from "react";
import axios from "axios";
import { unavailable } from "./config/config";

const App = () => {
  // state tampung data api nya
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    movie().then((res) => {
      setMovies(res);
    });
    Search();

    //eslint-disable-next-line
  }, []);

  // mapdata Api
  const ListMovie = () => {
    return movies.map((res, i) => {
      return (
        <div key={i} className="wrapper">
          <div className="movie-title">{res.title}</div>
          <img
            className="img"
            src={
              res.poster_path
                ? `${process.env.REACT_APP_IMG}/${res.poster_path}`
                : unavailable
            }
            alt=""
          />
          <div className="date">{res.release_date}</div>

          <div className="">
            <div className="rate-star">&#10032;</div>
            <div className="rate">{res.vote_average}</div>
          </div>
        </div>
      );
    });
  };

  // q adalah untuk menampung querry dari inputannya
  // value dari inputan dijadikan queery untuk hitting point
  const Search = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${search}&include_adult=false`
      );
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  // console.log({ movies: movies });

  return (
    <div className="App">
      <header className="App-header">
        <p>BELAJAR</p>

        <div>
          <input
            className="search"
            placeholder="search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn" onClick={Search}>
            Search
          </button>
        </div>

        <div className="container">
          <ListMovie />
        </div>
      </header>
    </div>
  );
};

export default App;
