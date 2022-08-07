import { Component, createContext } from "react";

// create a context with the createContext() function
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  // set shared states
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      // define the provider from the created context
      // wrap the provider around the compents that would be using the shared states
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
