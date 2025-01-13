import { Link, Outlet } from "react-router-dom";
import MovieDetalist from "../MovieDetalist/MovieDetalist";

export default function DefaultLayout() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Movies
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to={"/"} class="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>

                <li class="nav-item">
                  <Link
                    to={"/detalist"}
                    class="nav-link active"
                    aria-current="page"
                  >
                    Detalist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
