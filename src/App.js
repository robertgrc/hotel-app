import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

function App() {
  return (
    <AppTheme>
      <AppRouter />
      <hr />
    </AppTheme>
  );
}

export default App;
