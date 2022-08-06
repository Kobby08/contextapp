import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h2>Context App</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
