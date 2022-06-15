import React from 'react';

import { Stars } from './components/Stars';
import { Listing } from './components/Listing';

// import { parseJSON } from './utils/parseJSON';
// по всей видимости реакт сразу импортирует из JSON объект, но функцию я написал оставлю для отчетности
import DATA from './data';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Stars count={1} />
      <Stars count={2} />
      <Stars count={3} />
      <Stars count={4} />
      <Stars count={5} />
      <Stars count={6} />
      <Listing items={DATA} />
    </div>
  );
}

export default App;
