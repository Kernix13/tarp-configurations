<<<<<<< HEAD
import React, { useState } from "react";
=======
import { useState } from "react";
>>>>>>> hamburger-menu
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaBars, FaRegWindowClose } from "react-icons/fa";

import MenuItems from "./MenuItems";

function NavBar({ title }) {
<<<<<<< HEAD
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
=======
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <header className="mb-12 py-4 shadow-lg bg-gradient-to-br from-teal-500 to-teal-900 text-neutral-content">
      <div className="container mx-auto nav-bar">
        <nav className="sm:flex items-center justify-center">
          {/* Need hover class */}
          <div className="px-2">
            <Link to="/" className="text-lg font-bold align-middle nav-branding">
              {title}
            </Link>
          </div>

          {/* need the menu to close when a link is clicked, setActive? and need to use a transition */}
          <div className="absolute right-5 top-5 scale-100 cursor">{!active ? <FaBars onClick={showMenu} className="mx-3 cursor-pointer sm:hidden" /> : <FaRegWindowClose onClick={showMenu} className="mx-3 cursor-pointer sm:hidden" />}</div>

          <ul className="hidden nav-menu sm:flex justify-end flex-1 sm:px-2 sm:mx-2">
            <li className="nav-item">
              <Link to="/" className="btn btn-ghost btn-sm rounded-btn nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/results" className="btn btn-ghost btn-sm rounded-btn nav-link">
                Results
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/configs" className="btn btn-ghost btn-sm rounded-btn nav-link">
                Configs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/calcs" className="btn btn-ghost btn-sm rounded-btn nav-link">
                Calcs
              </Link>
            </li>
          </ul>
          <MenuItems showMenu={showMenu} active={active} />
        </nav>
      </div>
>>>>>>> hamburger-menu
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
