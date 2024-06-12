import {Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navigation">
      <div className="brand-logo">Mir Mehraj</div>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li>
            <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li>
            <Link to="/resume" className="nav-link">Resume</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Navbar;