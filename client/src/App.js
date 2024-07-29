import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GifContainer from "./views/Container/GifContainer";
import Home from "./views/Container/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gifs/:filter" element={<GifContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
