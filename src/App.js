import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form } from 'react-bootstrap';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Home } from './components/Pages/Home/Home';
import { Promociones } from './components/Pages/Promociones/Promociones';
import { Nosotros } from './components/Pages/Nosotros/Nosotros';
import { Contacto } from './components/Pages/Contacto/Contacto';
import { Css } from './components/NavBar/index'
 
function App() {

  const {container} = Css
  
 
  return (

       
    <>     
      <BrowserRouter>
      <NavBar />
         <Routes>
            <Route path='/inicio' element={<Home />} />
            <Route path='/promociones' element={<Promociones />}/>
            <Route path='/nosotros' element={<Nosotros />}/>
            <Route path='/contacto' element={<Contacto />}/>
            <Route path='*' element={<Promociones />}/>
          </Routes>
      </BrowserRouter>
    </>
    
      );
}

export default App;
