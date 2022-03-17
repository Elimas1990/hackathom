import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Home from './page/Home';
import Streams from './page/Streams';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <NavbarContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="streams" element={<Streams/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
