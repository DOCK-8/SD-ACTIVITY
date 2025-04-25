import React, { useState } from "react";
import Axios from "../apiClient/Axios";

const PutPassword = (password, setMessage) => {
  Axios.put(`/foo/${localStorage.getItem("id")}`, {
    string_field: password,
  })
    .then((response) => {
      setMessage("Cambio exitoso!");
      console.log(response);
    })
    .catch((error) => {
      setMessage("Hubo un error al cambiar la contraseña.");
      console.error(error);
    });
};

const SavePassword = (password, setMessage) => {
  Axios.post(`/foo`, {
    string_field: password,
  })
    .then((response) => {
      setMessage("Contraseña guardada exitosamente.");
      console.log(response);
    })
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        setMessage("YA ESTÁ REGISTRADA esta contraseña");
      } else {
        setMessage("Error al guardar la contraseña.");
      }
      console.error(error);
    });
};


const ChangePassword = () => {
  const [newPassword, setnewPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.error(newPassword);
    console.error(repeatPassword);
    if(newPassword != repeatPassword) {
      setMessage("the passwords don't equals")
    }
    else{
      if(localStorage.getItem("put-change") === 'true')
        PutPassword(newPassword, setMessage);
      else
        SavePassword(newPassword, setMessage);
    }
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
