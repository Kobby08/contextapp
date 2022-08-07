import { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Booklist extends Component {
  render() {
    return (
      // we can access context using the Consumer property from the context api
      // we use JSX to write a call back function that accepts the value of the context as a param

      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
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
        }}
      </ThemeContext.Consumer>
    );
  }
}

// this way of accessing context can be used in functional components too.

export default Booklist;
