import React, { useState } from "react";
import Axios from "../apiClient/Axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = Axios.get(`/foo/${username}`, {
      username,
      password,
    }) .then((response) => {
      setMessage("Login successful!");
      console.log(response);
      response.string_field == password ? setMessage("Correct Password") : setMessage("Incorrect Password");
    })
    .catch((error) => {
      setMessage("Login failed. Please check your credentials.");
      console.error(error);
    });
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Please Sign In</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user-name"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="user-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="ENVIAR" />
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
