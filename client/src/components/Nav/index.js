import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Book Search
      </a>
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/save">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
