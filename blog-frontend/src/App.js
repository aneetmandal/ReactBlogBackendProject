import {BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home";
import Article from "./components/article";
import Bollywood from "./components/bollywood";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/bollywood" element={<Bollywood />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
