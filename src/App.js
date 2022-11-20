import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Service from './components/Pages/Service/Service';
import Contact from './components/Pages/Contact/Contact';
import NavBar from './NavBar';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path="*"element={<Navigate to="/" replace />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
