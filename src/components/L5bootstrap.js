import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function L5boot(props) {
  return (
    <>
      <h1
        className={`bg-${props.mode}`}
        // style={{ color: props.mode === "dark" ? "pink" : "blue" }}
      >
        L5bootstrap code with harry
      </h1>
      <p
        style={{
          color: props.mode === "dark" ? "pink" : "blue",
          backgroundColor: props.mode === "dark" ? "grey" : "pink",
        }}
      >
        l=lecture app of changing text in upper or lower or capitalize
      </p>
      <p>npm run build for final deploy server for better optimization</p>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/basic">     
            {props.title}
          </Link> */}
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/text"
                >
                  Text-Transform
                </Link> */}
                <a className="nav-link active" aria-current="page" href="#">
                  Text-Transform
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/todo">
                  Todo app
                </Link> */}
                <a className="nav-link" href="#">
                  Todo app
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/mode">
                  mode switch
                </Link> */}
                <a className="nav-link" href="#">
                  mode switch
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex " role="search">
              <input
                className={`form-control me-2  text-${
                  props.mode === "dark" ? "light" : "dark"
                } bg-${props.mode}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}

              <div
                className={`form-check form-switch text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
              >
                <input
                  className={`form-check-input bg-${props.mode}`}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.modeSw}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.mode === "light" ? "Light Mode" : "Dark Mode"}
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

L5boot.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

L5boot.defaultProps = {
  title: "default title",
  aboutText: "set default about",
};
