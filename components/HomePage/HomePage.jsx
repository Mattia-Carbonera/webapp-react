import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../reusable/Card";

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

  //   console.log(movies);

  return (
    <main>
      <h1>Movies</h1>

      <div className="card-container">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            image={movie.image}
            title={movie.title}
            author={movie.director}
          />
        ))}
      </div>

      {/* <div className="movie-list-container">
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
      </div> */}
    </main>
  );
}
