import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import { useMutation, useQuery } from '@apollo/client';
import { GET_USER, SIGN_IN } from './queries/queries';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  const { data: getUserData, loading: getUserLoading, error: getUserError } = useQuery(GET_USER, {
    variables: { id: 1 },
  });
  const [signIn, { data, loading, error }] = useMutation(SIGN_IN);

  const onLogInButtonClick = () => {
    signIn({ variables: { email: email, password: password } }).then((res) => {
      const { data } = res;
      if (data && data.signIn && data.signIn.ok) {
        window.open('https://naver.com');
        return;
      }
    });

    // sadasd
    // 12312
  };

  if (getUserLoading || getUserError) return <div>loading...</div>;

  if (getUserData.getUser.ok) {
    const { user: getUserProfile } = getUserData.getUser;
    if (!isUpdated) {
      setIsUpdated(true);
      setFirstName(getUserProfile.firstName);
      setLastName(getUserProfile.lastName);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {`${lastName} ${firstName}`}

        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={() => onLogInButtonClick()}>click</button>
      </header>
    </div>
  );
};

export default App;
