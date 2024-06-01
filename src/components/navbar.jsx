import React from "react";

class Navbar extends React.component {
    render() {
        return  <nav className="navbar navbar-expand-lg navbar-light navcolor">
        <a className="navbar-brand link-items" href="#">Pizzamania</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> 
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link link-items" href="#"
                >Home <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link link-items" href="#">About Pizza</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-items">Pizza Types</a>
            </li>
          </ul>
        </div>
      </nav>
  ;
}
}
   
export default Navbar;