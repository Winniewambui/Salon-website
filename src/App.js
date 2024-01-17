import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/heroSection/Hero';
import Main from './components/mainpage/Main';
import Testimonial from './components/testimonials/Testimonial';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
