import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Pages from './components/pages';
import Service from './components/services/Service';
import SignUp from './components/loginSignUp/SignUp';
import LoginForm from './components/loginSignUp/LoginForm';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pages />} />
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
