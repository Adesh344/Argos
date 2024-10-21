import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Doc from '../Pages/doc/Doc';
import Qa from '../Pages/qa/Qa';
import Home from '../Pages/home/Home';

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doc" element={<Doc />} />
      <Route path="/qa" element={<Qa />} />
    </Routes>
  );
}

export default AppRoute;
