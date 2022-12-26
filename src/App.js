import "./App.css";
import Contact from "./Components/Contact/Contact";
//import { ContactFormWithCustomHook } from "./Components/Contact/ContactFormWithCustomHook";

import Title from "./Components/Title/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <Contact />
      <hr />
    </div>
  );
}

export default App;
