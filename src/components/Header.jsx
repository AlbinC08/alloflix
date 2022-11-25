import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyRoutes } from "./Routeur";
import { MyContext } from "../store/AppContext";


// let navigate = useNavigate();

const Header = () => {

  const { store, setStore } = useContext(MyContext)

    const logout = () => {
        sessionStorage.clear();
        setStore({...store, isUserAuth : false})

    } 



    return (


        <header>

            <nav>

                <Link to={MyRoutes.ACCEUIL}>Acceuil</Link >
                <Link to={MyRoutes.FAVORITE}>Coup de coeur</Link >
                <Link to={MyRoutes.PROFILE}>Mon profil</Link >
                <button onClick={logout} type="submit">Déconnexion</button>
            </nav>

            <h1>AlloFlix</h1>


        </header>

    );

}


export default Header