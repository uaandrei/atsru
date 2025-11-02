import { Routes, Route, NavLink } from "react-router-dom";
import { HomePage } from "./pages";
import { FrozenYogurtPrivacyPolicyPage } from "./pages";

export const Router = () => (
  <div className="container">
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            atsru
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <hr />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fy-privacy-policy" element={<FrozenYogurtPrivacyPolicyPage />} />
    </Routes>
  </div>
);
