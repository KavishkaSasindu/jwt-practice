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
        "http://localhost:3000/signIn",
        getData
      );
      if (response.status === 200) {
        console.log(response.data.token);
        const token = response.data.token;
        localStorage.setItem("jwt", token);
        // localStorage.setItem("access_token", response.data.token);
        console.log("Verified credentials");
      }
      console.log(response);
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
