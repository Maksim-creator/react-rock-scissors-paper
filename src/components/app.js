import React from 'react';
import Main from './main';
import Header from './header';
import {useState} from 'react'

import './app.css';

const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className="mainBg">
      <Header setStarted={setStarted} started={started}/>
      <Main started={started}/>
    </div>
  )
}

export default App;