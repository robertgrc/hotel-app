import "./App.css";
import Contact from "./Components/Contact/Contact";
import Title from "./Components/Title/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <Contact />
      {/* <button onClick={getUsers}>Get Reservas</button> */}
      {/* <button onClick={createUser}>Post Reserva</button> */}
      <hr />
    </div>
  );
}

export default App;
