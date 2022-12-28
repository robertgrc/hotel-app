import "./App.css";
import axios from "axios";
import Contact from "./Components/Contact/Contact";
import Title from "./Components/Title/Title";

function App() {
  // const getUsers = async () => {
  //   try {
  //     //const url = "https://jsonplaceholder.typicode.com/users";
  //     const url = "http://localhost:4000/api/auth/new";
  //     const response = await axios.get(url);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const createUser = async () => {
    try {
      const url = "http://localhost:4000/api/auth/new";
      const body = {
        name: "mateo2",
        email: "mateo2@gmail.com",
        password: "123456",
      };

      const response = await axios.post(url, body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <Title />
      <Contact />
      {/* <button onClick={getUsers}>Get Reservas</button> */}
      <button onClick={createUser}>Post Reserva</button>
      <hr />
    </div>
  );
}

export default App;
