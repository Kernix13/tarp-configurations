import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";

function NavBar({ title }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header>
      <nav className="navbar mb-12 shadow-lg bg-gradient-to-br from-teal-500 to-teal-900 text-neutral-content">
        <div className="container mx-auto">
          {/* Need hover class */}
          <div className="flex-none px-2">
            <Link to="/" className="text-lg font-bold align-middle">
              {title}
            </Link>
          </div>

          <div className="flex-1 sm:px-2 sm:mx-2">
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
              <Link to="/calcs" className="btn btn-ghost btn-sm rounded-btn">
                Calcs
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

NavBar.defaultProps = {
  title: "Tarp Set-Ups"
};

NavBar.propTypes = {
  title: PropTypes.string
};

export default NavBar;
