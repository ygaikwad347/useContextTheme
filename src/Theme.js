import ThemeContext from "./context/ThemeContext";
import { useContext } from "react";

function Theme() {
  const { theme, handleTheme } = useContext(ThemeContext);

  const darkTheme = {
    width: 200,
    height: 200,
    border: "2px solid black",
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black"
  };
  return (
    <div style={darkTheme}>
      <button onClick={handleTheme}>Change Theme</button>
      <p>This theme is applied by using useContext</p>
    </div>
  );
}
export default Theme;
