import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
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
      const response = await fetch("http://localhost:3000/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_TOKEN_HERE", // Replace YOUR_TOKEN_HERE with your actual token
        },
        body: JSON.stringify(getData),
      });
      if (response.status === 200) {
        localStorage.setItem("jwt", response.data.token);
        navigate("/home");
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
