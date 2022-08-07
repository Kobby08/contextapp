import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";

import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
