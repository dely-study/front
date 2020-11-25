import React from 'react';

const LoginPage = (props) => {
  console.log(props);
  return (
    <div>
      <span>LoginPage</span>
      <button onClick={() => props.history.goBack()}>뒤로가기</button>
    </div>
  );
};

export default LoginPage;
