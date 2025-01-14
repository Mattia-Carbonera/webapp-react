import { Link } from "react-router-dom";

Link;

export default function Index() {
  return (
    <main>
      <h1>Benvenuti nel mondo dello spettacolo</h1>
      <div className="backgrownd-image">
        <img src="public/img/films.jpg" alt="" />
      </div>

      <div className="index-content text-center">
        <h2 className="py-5 text-center">
          Tutto il cinema che vuoi in un posto solo
        </h2>
        <Link to={"/movies"} className="start-watching">
          Iniziamo!
        </Link>
      </div>
    </main>
  );
}
