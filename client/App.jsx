import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage.js';

const App = () => {

  return (
    <div className='router'>
      <main>
        <FrontPage />
      </main>
    </div>
  );
};

export default App;
