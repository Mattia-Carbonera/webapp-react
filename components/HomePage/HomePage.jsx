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
      <h1>Movies</h1>
      <div className="movie-list-container">
        <div className="movie-list">
          <ol>
            {movies.map((movie, id) => (
              <>
                <li key={id}>
                  <Link className="movie-list-link" to={"/detalis/" + movie.id}>
                    {movie.title}
                  </Link>
                </li>
                <hr className="movie-list-hr" />
              </>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
