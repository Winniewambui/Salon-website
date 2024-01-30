import './App.css';
import './index'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/heroSection/Hero';
import Main from './components/mainpage/Main';
import Footer from './components/footer/Footer';
import Testimonial from './components/testimonials/Testimonial';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Main />
      <Testimonial />
      <Footer />
    </HashRouter>
  );
}

export default App;