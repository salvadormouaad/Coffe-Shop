import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Contact from './Pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;