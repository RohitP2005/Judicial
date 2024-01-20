import React from 'react'
import "./App.css"
import axios from 'axios';
import Home from "./components/home/Home.jsx";
import Loader from "./components/loader/Loader.jsx";

axios.defaults.baseURL = "http://localhost:3000/";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<Loader />} />
      </Routes>
  )
}
