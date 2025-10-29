import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Navbar from './Components/Navbar'
import bg from './assets/L5ybLpPKIKMyjr_-XMDqpXwt4KXcq3kCXb2ijusj4zZdB8_56qWyZCzSsf06s0cL-NzEUu4Rm5KYqVuBWy087GqdlxO3u2WfO4Py-hXhkqANKcyF-EeR5-ENSmMfm2vD0Tvq_KP8mgFFj8g8j7au7o0RvZ8rYMJ2sajiGOYhaXg3TOJjtq48K17W7xZR_NJ5UbWsrSj7uTuBvR5HEy9_A2ET 1.png'
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;