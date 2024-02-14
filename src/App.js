import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/navbar/Navbar';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Footer from './layouts/footer/Footer';
import Home from './pages/Home';
import Service from './pages/services/Service';
import SignUp from './components/loginSignUp/SignUp';
import LoginForm from './components/loginSignUp/LoginForm';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginSignUp" element={<LoginForm />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
