import { createContext, useState } from "react";

const ThemeContext = createContext();

const Provider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div>
      <ThemeContext.Provider value={{ theme, handleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export { Provider };
export default ThemeContext;
