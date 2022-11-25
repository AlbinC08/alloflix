import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css"

const MyProfile = () => {
  const token = sessionStorage.getItem("token");
  const [profile, setProfile] = useState("")

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


    // const [hasToken, setHasToken] = useState(false)
  const URL_GET_PROFILE = "https://api-ri7.herokuapp.com/api/users/profile";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  };

  const getProfile = () => {

    axios
      .get(URL_GET_PROFILE, config)
      .then((response) => {
        console.log(response.data);
        setProfile(response.data);
        console.log(profile);
      })
      .catch((err) => console.log(err));
  };

    useEffect(() => {
      getProfile();
    }, []);



  return (
    <div className="my-profile">
      {/* <h3>{profile.lastname}</h3> */}
      {/* <form onSubmit={(e) => getProfile(e)}>
        <input type="submit" value="Envoyer" />
      </form> */}

<h3>Mon Profil</h3>
      <form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder={profile.firstname}
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          required
        />
        <input
          type="text"
          placeholder={profile.lastname}
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          required

        />
        <input
          type="email"
          placeholder={profile.email}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required

        />
        <input
          type="password"
          placeholder={profile.password}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required

        />
        <input
          type="text"
          placeholder={profile.postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          value={postalCode}
          required

        />
        <input
          type="text"
          placeholder={profile.city}
          onChange={(e) => setCity(e.target.value)}
          value={city}
          required

        />
        <input type="submit" value="Envoyer" />
      </form>

    </div>
  );
};

export default MyProfile;
