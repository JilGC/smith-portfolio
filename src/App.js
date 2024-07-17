import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <div id="page-body">

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/project" element={<ProjectPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>

          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
