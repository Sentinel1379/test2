import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/auth/Login';
import './GlobalCSS/structure.css'
import Foods from './Pages/Foods/Foods';
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/foods' element={<Foods/>} />
        </Routes>
      </Router>
   </>
  );
}

export default App;
