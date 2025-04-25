import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../apiClient/Axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isLinkChange, setisLinkChange] = useState(false);
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("put-change",true);
    const response = Axios.get(`/foo/${username}`, {
      username,
      password,
    }) .then((response) => {
      console.log(response);
      if(response.string_field == password){
        setMessage("Correct Password");
        localStorage.setItem("id",username);
        localStorage.setItem("put-change",true);
        setisLinkChange(true);
      }
      else if(response.string_field.includes(password)){
        setData(response.string_field);
        setIsButtonVisible(true);
      }
      else
        setMessage("Incorrect Password");
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
      <Link to="/">new Account but it's to create password?</Link>
      <hr/>
      <hr/>
      {isLinkChange && (
        <Link to="/change-password">change Password</Link>
      )}
       {isButtonVisible && (
          <button onClick={() => {setMessage(`Tu contraseña es ${data}`);setIsButtonVisible(false);}}>
          Help me remember my password
        </button>
      )}
    </div>
  );
};

export default Login;
