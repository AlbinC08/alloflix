import axios from "axios";
import React, { useState } from "react";
import "../style/register.css"

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("https://api-ri7.herokuapp.com/api/users/register", {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        city: city,
        postalCode: postalCode,
      });
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setPostalCode("");
      setCity("");
      console.log(firstname);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <h3>S'inscrire</h3>
      <form className="subscribe-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Prénom"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          required
        />
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          required

        />
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
        <input
          type="text"
          placeholder="code Postal"
          onChange={(e) => setPostalCode(e.target.value)}
          value={postalCode}
          required

        />
        <input
          type="text"
          placeholder="Ville"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          required

        />
        <input type="submit" value="Envoyer" />
      </form>
    </>
  );
};

export default Register;
