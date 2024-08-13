import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CreateUser from "./Components/CreateUser";
import Users from "./Components/Users";
import EditUser from "./Components/EditUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home></Home>
        <Routes>
          <Route element={<CreateUser />} path="/"></Route>
          <Route element={<Users />} path="/users"></Route>
          <Route element={<EditUser/>} path="/edit/:id"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
