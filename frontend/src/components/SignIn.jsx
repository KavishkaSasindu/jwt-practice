import React from "react";
import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [getData, setData] = useState({
    email: "",
    password: "",
  });

  const changeValue = (e) => {
    setData({
      ...getData,
      [e.target.name]: e.target.value,
    });
  };

  const handleData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/signIn",
        getData
      );
      console.log(response);
      //   if (response.status === 200) {
      //     localStorage.setItem("access_token", response.data.token);
      //     console.log("successfully logged in");
      //   } else {
      //     console.log("Error:", response.data.message);
      //   }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <form action="" method="POST" onSubmit={handleData}>
              email:
              <input type="email" name="email" onChange={changeValue} />
              password:
              <input type="password" name="password" onChange={changeValue} />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
