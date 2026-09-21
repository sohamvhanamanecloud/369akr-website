import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Railway from './pages/Railway';
import NetworkTowers from './pages/NetworkTowers';
import OFC from './pages/OFC';
import Solar from './pages/Solar';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/railway" element={<Railway />} />
            <Route path="/network-towers" element={<NetworkTowers />} />
            <Route path="/ofc" element={<OFC />} />
            <Route path="/solar" element={<Solar />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
