import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './style.css';
import Login from './parentComponent/loginComponent';
import Dashboard from './parentComponent/dashboard/dashboardComponent';
// dom manupulation -create form save and submit
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} exact></Route>
        <Route path="/" element={<Login />} exact></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
