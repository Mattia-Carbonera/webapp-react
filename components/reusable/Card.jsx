import { Link } from "react-router-dom";

export default function Card({ image, title, author, id }) {
  return (
    <Link className="movie-list-link" to={"/detalis/" + id}>
      <div className="card-body">
        <div className="image">{image && <img src={image} alt="" />}</div>
        <div className="card-content">
          {author && <span className="author">{author}</span>}
          {title && <h2>{title}</h2>}
        </div>
      </div>
    </Link>
  );
}
