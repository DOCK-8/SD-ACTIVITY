import React, { useState } from "react";
import Axios from "../apiClient/Axios";

const ChangePassword = () => {
  const [newPassword, setnewPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.error(newPassword);
    console.error(repeatPassword);
    // const response = Axios.get(`/foo/${username}`, {
    //   username,
    //   password,
    // }) .then((response) => {
    //   setMessage("Login successful!");
    //   console.log(response);
    //   response.string_field == password ? setMessage("Correct Password") : setMessage("Incorrect Password");
    // })
    // .catch((error) => {
    //   setMessage("Login failed. Please check your credentials.");
    //   console.error(error);
    // });
  };

  return (
    <div>
      <h1>Change to new Password!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          name="new-password"
          placeholder="PASSWORD"
          value={newPassword}
          onChange={(e) => setnewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          name="repeat-password"
          placeholder="REPEAT PASSWORD"
          value={repeatPassword}
          onChange={(e) => setrepeatPassword(e.target.value)}
          required
        />
        <input type="submit" value="CHANGED" />
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ChangePassword;
