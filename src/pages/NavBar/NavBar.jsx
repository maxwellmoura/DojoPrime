import { NavLink } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {

  return (
    <nav className="navbar">
      <NavLink className='brand' to="/">
        Dojo <span>Prime</span>
      </NavLink>
      <ul className="links_list">
        <li>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Conteudo">Conteúdo</NavLink>
        <NavLink to="/Atletas">Equipe</NavLink>
        <NavLink to="/Shop">Loja</NavLink>
        <NavLink to="/About">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
