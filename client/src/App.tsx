import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ShelterList from "./pages/Shelter/ShelterList";
import CreateShelter from "./pages/Shelter/CreateShelter";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="shelter">
          <Route path="list" element={<ShelterList />} />
          <Route path="new" element={<CreateShelter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
