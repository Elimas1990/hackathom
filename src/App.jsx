import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Error from './page/Error';
import Home from './page/Home';
import Login from './page/Login';
import Streams from './page/Streams';


function App() {
  return (
    <BrowserRouter>
      <NavbarContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="streams" element={<Streams/>}/>
        <Route path="streams/:id" element={<Streams/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
