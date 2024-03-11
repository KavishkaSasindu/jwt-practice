import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SIgnUp = () => {
  const navigate = useNavigate();
  const [getData, setData] = useState({
    username: "",
    password: "",
    email: "",
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
        "http://127.0.0.1:3000/signUp",
        getData
      );
      console.log("Response received:", response);
      if (response.status === 201) {
        console.log("Data submitted successfully:", response.data);
        navigate("/signIn");
      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div>
      <div>
        <form action="" method="POST" onSubmit={handleData}>
          username:
          <input type="text" name="username" onChange={changeValue} />
          email:
          <input type="email" name="email" onChange={changeValue} />
          password:
          <input type="password" name="password" onChange={changeValue} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SIgnUp;
