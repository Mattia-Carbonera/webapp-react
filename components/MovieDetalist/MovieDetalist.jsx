import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetalist() {
  const [movie, setMovie] = useState([]);

  const bookId = useParams();
  const urlFrontend = "http://localhost:3000/db/" + bookId.id;

  useEffect(() => {
    fetch(urlFrontend)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data[0]);
      });
  }, []);

  return (
    <main>
      <h1>Movie Detail</h1>
      <div className="movie-list">
        <h2>{movie.title}</h2>
        <p>{movie.abstract}</p>
      </div>
    </main>
  );
}
