import { Provider } from "./context/ThemeContext";
import Theme from "./Theme";

export default function App() {
  return (
    <div>
      <Provider>
        <Theme />
      </Provider>
    </div>
  );
}
