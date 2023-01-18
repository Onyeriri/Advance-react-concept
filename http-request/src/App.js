import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   console.log(movies);
  // }, [movies]);

  const fetchMoviesHandler = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) {
        throw new Error('Something went wrong!!!');
      }
     const data = await response.json();
    
    const convertedMovies = data.results.map((result) => {
      return {
        id: result.episode_id,
        title: result.title,
        releaseDate: result.release_date,
        openingText: result.opening_crawl
      };
    });
    setMovies(convertedMovies);
    if (convertedMovies){
      setIsLoading(false);
    }
    } catch (error) {
      setError(error.message)
    }

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

  let content = '';



  if (movies.length === 0 && !isLoading) {
    content = <h1>No movies to display</h1>;
  } else {
    content = <MoviesList movies={movies} />;
  }

  if (isLoading && !error) {
    content = <p>Movies loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        { content }
      </section>
    </React.Fragment>
  );
}

export default App;
