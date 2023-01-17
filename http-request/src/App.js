import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   console.log(movies);
  // }, [movies]);

  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films').then((response) => response.json()).then((data) => {
      const convertedMovies = data.results.map((result) => {
        return {
          id: result.episode_id,
          title: result.title,
          releaseDate: result.release_date,
          openingText: result.opening_crawl
        };
      });
      setMovies(convertedMovies);
    });

  }

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
