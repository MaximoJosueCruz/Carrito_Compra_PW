import "./Navbar.css";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import TotalItems from "../cartcontent/TotalItems";

const Navbar = () => {
  const {cart}=useContext(dataContext);
  return (
  <div className= "nav-container">
    <nav className= "navbar">
      <Link to={"/" }>
        <h1 className="navbar-logo">tienda.</h1>
      </Link>
    <Link className="seeCarrito" to={"/cart"}>🛒
      {cart.length>0 ? <TotalItems /> : null} 
    </Link>
    </nav>
  </div>
  );
};

export default Navbar