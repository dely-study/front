import React, { useState } from 'react';

import AppPresenter from './AppPresenter';

import { useMutation, useQuery } from '@apollo/client';
import { GET_USER, SIGN_IN } from '../queries/queries';

const AppContainer = () => {
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
    <AppPresenter
      setEmail={setEmail}
      setPassword={setPassword}
      onLogInButtonClick={onLogInButtonClick}
      firstName={firstName}
      lastName={lastName}
    ></AppPresenter>
  );
};

export default AppContainer;
