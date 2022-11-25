import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../store/AppContext";
import { MyRoutes } from "./Routeur";
import { useError } from "../utils/useError";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {myError, saveError} = useError()
  

  const { store, setStore } = useContext(MyContext)

  let navigate = useNavigate();

  const loginUser = () => {
    axios
      .post("https://api-ri7.herokuapp.com/api/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("token", response.data.token);
        setStore({...store, isUserAuth : true})
        navigate(MyRoutes.ACCEUIL);

      })
      .catch((err) => saveError(err.response.data.error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };
  return (
    <div className="login">
      {myError != null && <h2>{myError}</h2>}
      <h3>Se connecter</h3>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <input type="submit" value="Envoyer" />

        {/* <h1>theme actuel = {store.theme}</h1>
        <h1>Utilisateur authentifier = {store.isUserAuth ? "oui" : "non"}</h1>
         */}
      </form>
    </div>
  );
};

export default Login;
