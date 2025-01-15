import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Review from "../reusable/review";
import ReviewsForm from "../reusable/reviewsForm";

export default function MovieDetalist() {
  const [movie, setMovie] = useState([]);

  const movieId = useParams();
  const urlFrontend = "http://localhost:3000/db/" + movieId.id;

  useEffect(() => {
    fetch(urlFrontend)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        // console.log(data);
      });
  }, []);

  //   console.log(movie);

  return (
    <main>
      <h1>Movie Detail</h1>
      <div className="movie-detalis-container">
        <div className="movie-detalis">
          <div className="movie-image">
            <img src={movie?.length > 0 && movie[0].image} alt="" />
            <ReviewsForm id={movieId} />
          </div>

          <div className="movie-caption">
            <h2>{movie?.length > 0 && movie[0].title}</h2>
            <span>{movie?.length > 0 && movie[0].director}</span>
            <hr className="movie-detalis-hr" />
            <div className="movie-description">
              <h4>Description:</h4>
              <p>{movie?.length > 0 && movie[0].abstract}</p>
            </div>
            <hr className="movie-detalis-hr" />
            <h4>Review:</h4>
            <div className="card-reviews-container">
              {movie.map((mov, id) => (
                <Review
                  key={id}
                  name={mov.name}
                  review={mov.text}
                  vote={mov.vote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="btn-back">
        <Link to={"/movies"} className="btn btn-secondary">
          Indietro
        </Link>
      </div>
    </main>
  );
}
