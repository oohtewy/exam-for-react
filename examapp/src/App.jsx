import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import Login from "./Pages/Login";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/About" element={<About />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/Login" element={<Login />} />       
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
