import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";

import Register from "./components/Register";
import Register2 from "./components/Register2";
import Register3 from "./components/Register3";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Register" element={<Register2 />} />
        <Route path="/Register3" element={<Register3 />} />
      </Routes>
    </div>
  );
}

export default App;
