import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Home from './Pages/Home/Home';
import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import Projects from './Pages/Projects/projects';
import Quiz from './Pages/Projects/Quiz';
import Todo from './Pages/Projects/todo';
import Calculator from './Pages/Projects/Calculator';
import Guess from './Pages/Projects/Guess';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container"> 
        <Sidebar />
        <div className="main-content"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/projects" element={<Projects />} />
            <Route path="/projects/Quiz" element={<Quiz />} />
            <Route path="/projects/todo" element={<Todo />} />
            <Route path="/projects/Calculator" element={<Calculator />} />
            <Route path="/Projects/Guess" element={<Guess />} />
          </Routes>
          {/* Add Footer here so it shows on every page */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
