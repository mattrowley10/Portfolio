import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./Components/TopNav";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";

function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
