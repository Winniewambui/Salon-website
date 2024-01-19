import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/heroSection/Hero';
import Main from './components/mainpage/Main';
import Footer from './components/footer/Footer';
import Testimonial from './components/testimonials/Testimonial';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Main />
      <Testimonial />
      <Footer />
    </Router>
  );
}

export default App;