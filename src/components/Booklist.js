import { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Booklist extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>The Gods must be crazy</li>
          <li style={{ background: theme.ui }}>Harry Potter</li>
          <li style={{ background: theme.ui }}>God of war</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;
