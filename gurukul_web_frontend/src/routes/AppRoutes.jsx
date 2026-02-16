import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SSCCS from '../pages/SSCCS';
import SSCCM from '../pages/SSCCM';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ssccs" element={<SSCCS />} />
      <Route path="/ssccm" element={<SSCCM />} />
    </Routes>
  );
};

export default AppRoutes;
