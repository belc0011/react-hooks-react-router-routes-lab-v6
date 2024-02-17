import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="NavLink">Home</NavLink>
      <NavLink to="/directors" className="NavLink">Directors</NavLink>
      <NavLink to="/actors" className="NavLink">Actors</NavLink>
    </nav>
    );
};

export default NavBar;
