import "./App.css";
// import Contact from "./Components/Contact/Contact";
// import ContactForm from "./Components/Contact/ContactForm";
// import Title from "./Components/Title/Title";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

function App() {
  return (
    <AppTheme>
      <AppRouter />
      {/* <Title />
      <ContactForm />
    <Contact /> */}
      {/* <button onClick={getUsers}>Get Reservas</button> */}
      {/* <button onClick={createUser}>Post Reserva</button> */}
      <hr />
    </AppTheme>
  );
}

export default App;
