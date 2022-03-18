import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CarouselContainer } from './components/carouselsContainer/carouselsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Home from './page/Home';
import Streams from './page/Streams';
import { NextEventContainer } from './components/nextEventContainer/nextEventContainer'
import { EventProvider } from './context/eventContext'

function App() {
  return (
    <EventProvider>
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="streams" element={<Streams />} />

          <Route path="carousel" element={<CarouselContainer />} />
          <Route path="nextevent" element={<NextEventContainer />} />

        </Routes>
      </BrowserRouter>
    </EventProvider>
  );
}

export default App;
