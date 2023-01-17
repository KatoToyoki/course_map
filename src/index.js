import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Map from './pages/Map';
import School from './pages/School';

import Course_map from './pages/Course_map';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/course_map" element={<Home />} />
          <Route path="/course_map/map" element={<Map />} />
          <Route path="/course_map/school" element={<School />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();