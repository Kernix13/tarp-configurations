import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-gradient-to-br from-blue-500 to-gray-700 text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/results" className="btn btn-ghost btn-sm rounded-btn">
              Results
            </Link>
            <Link to="/configs" className="btn btn-ghost btn-sm rounded-btn">
              Configs
            </Link>
            {/* <Link to="/calcs" className="btn btn-ghost btn-sm rounded-btn">
              Calcs
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.defaultProps = {
  title: "Tarp Set-Ups"
};

NavBar.propTypes = {
  title: PropTypes.string
};

export default NavBar;
