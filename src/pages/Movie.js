import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js"
import MovieCard from "../components/MovieCard.js"
import { useParams } from "react-router-dom";

function Movie() {
  const params = useParams();
  console.log(params)
  const movieId = params.id;
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res => res.json())
    .then(data => setMovie(data))
  }, [movieId])
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres && movie.genres.map((genre) => {
          return <span>{genre}</span>
        })}
      </main>
    </>
  );
};

export default Movie;
