import React, { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Header from "./Header";
import Listmovies from "./ListMovies";
import MovieDetail from "./MovieDetail";
import Favorite from "./Favorite";
import Register from "./Register";
import Login from "./Login";
import MyProfile from "./MyProfile";
import { AppContext, MyContext } from "../store/AppContext";

export const MyRoutes = {
  ACCEUIL: "/films",
  FAVORITE: "/favorite",
  FILM: "/films/:idFilm",
  REGISTER: "/register",
  LOGIN: "/",
  PROFILE: "/profile",
};

const AuthRoutes = () => {
  const { store } = useContext(MyContext);

  return store.isUserAuth ? <Outlet /> : <Navigate to={MyRoutes.LOGIN} />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          {/* ROUTES PUBLIQUES */}
          <Route path={MyRoutes.REGISTER} element={<Register />} />
          <Route path={MyRoutes.LOGIN} element={<Login />} />
          {/* ROUTES PRIVEES */}
          <Route element={<AuthRoutes />}>
            <Route path={MyRoutes.ACCEUIL} element={<Listmovies />} />
            <Route path={MyRoutes.FAVORITE} element={<Favorite />} />
            <Route path={MyRoutes.FILM} element={<MovieDetail />} />
            <Route path={MyRoutes.PROFILE} element={<MyProfile />} />
          </Route>
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
};

export default Router;
