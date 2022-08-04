import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { faScrewdriver } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  let history = useHistory();

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand text-light">
          <FontAwesomeIcon icon={faScrewdriver}></FontAwesomeIcon> Survey
        </a>
        <button
          class="navbar-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link text-light" to="/login">
              Login
            </Link>
            <Link class="nav-item nav-link text-light" to="/register">
              Register
            </Link>
            <Link
              class="nav-item nav-link text-light"
              to="/login"
              onClick={() => {
                window.localStorage.removeItem("app_token"); //removing the jwt token for logging out
                history.push(`/login`);
              }}
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
