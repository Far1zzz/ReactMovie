import axios from "axios";

// disini saya get api dengan async karena lagi males ngetik .then
export const movie = async () => {
  // get data api
  const movie = await axios.get(
    `${process.env.REACT_APP_URL}/movie/popular?api_key=${process.env.REACT_APP_KEY}`
  );
  // cek apakah data api sudah didapat
  //   console.log({ list: movie });
  //   kirim data api nya ke app.js
  return movie.data.results;
};

// q = value yg dijadikan querry di input
export const searchMovie = async ({ search }) => {
  const Search = await axios.get(
    `${process.env.REACT_APP_URL}/search/movie?query=${search}&api_key=${process.env.REACT_APP_KEY}`
  );
  return Search.data;
};
