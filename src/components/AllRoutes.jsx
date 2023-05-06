import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Favourites from "../pages/Favourites/Favourites";
import AddMovie from "../pages/AddMovie/AddMovie";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import SingleMovie from "../pages/SingleMovie/SingleMovie";
import EditMovie from "../pages/EditMovie/EditMovie";

function AllRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/add-movie" element={<AddMovie />} />
      <Route path="/edit-movie/:id" element={<EditMovie />} />
      <Route path="/movie-details/:id" element={<SingleMovie />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AllRoutes;
