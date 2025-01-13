import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const urlFrontend = "http://localhost:3000/db";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(urlFrontend)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <main>
      <h1>homepage</h1>
      <div className="movie-list">
        <ul>
          {movies.map((movie, id) => (
            <li key={id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
