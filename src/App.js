import useLocalStorage from "use-local-storage";
import "./App.css";



function App() {
  const defaultDark = window.matchMedia("(prefer-color-scheme: dark").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <span>Darkmode funsiezzz</span>
      <button onClick={switchTheme}>
        Switch Theme {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
}

export default App;
