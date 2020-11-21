import React from 'react';

import logo from './logo.svg';
import './App.css';

const AppPresenter = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {`${props.lastName} ${props.firstName}`}

        <input type="email" onChange={(e) => props.setEmail(e.target.value)}></input>
        <input type="password" onChange={(e) => props.setPassword(e.target.value)}></input>
        <button onClick={() => props.onLogInButtonClick()}>click</button>
      </header>
    </div>
  );
};

export default AppPresenter;
