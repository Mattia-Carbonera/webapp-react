import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// * IMPORT ROUTERS
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "../components/DefaultLayout/DefaultLayout";
import HomePage from "../components/HomePage/HomePage";
import MovieDetalist from "../components/MovieDetalist/MovieDetalist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index Component={HomePage} />
            <Route path="detalis/:id" Component={MovieDetalist} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
