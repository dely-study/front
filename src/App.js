import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={() => console.log(email, password)}>click</button>
      </header>
    </div>
  );
};

export default App;
