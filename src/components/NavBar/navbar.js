import React from 'react'
import { BsGithub } from "react-icons/bs";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Created by UDK</a>
          <form className="d-flex" role="search">
            <a href="https://github.com/UlasDoruk" target="blank">
              {<BsGithub />}
            </a>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar