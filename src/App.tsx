import React from 'react';
import './App.css';
//router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Carrello from './components/Carrello';
import DetailProduct from './components/DetailProduct';

const App: React.FC = () => {


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrello" element={<Carrello />} />
          <Route
            path="/detail/:id"
            element={<DetailProduct />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
