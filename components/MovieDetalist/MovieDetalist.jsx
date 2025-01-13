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
        setMovie(data);
      });
  }, []);

  return (
    <main>
      <h1>Movie Detail</h1>
      <div className="movie-detalis-container">
        <div className="movie-detalis">
          {/* <h2>{movie[0].title}</h2> */}
          <hr className="movie-detalis-hr" />
          <h3>Review:</h3>
          <ol className="reviews-list">
            {movie.map((mov, id) => (
              <li key={id}>{mov.text}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
