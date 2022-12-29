import axios from "axios";
import Contact from "../Components/Contact/Contact";

const hotelApi = () => {
  const createUser2 = async (nameContact, email) => {
    console.log(nameContact, email);
    try {
      const url = "http://localhost:4000/api/auth/new";
      const body = {
        name: nameContact,
        email: email,
        password: "123456",
      };

      const response = await axios.post(url, body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Contact createUser2={createUser2} />
    </div>
  );
};

export default hotelApi;
