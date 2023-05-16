
 import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import MovieTable from './Component/Movie/MovieTable/Table';

const App = () => {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/MovieTable" element={<MovieTable />} />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;

