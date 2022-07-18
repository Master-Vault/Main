
import React, { useState, useEffect } from 'react';

const Header = (props) => {

  // const [synced, setSynced] = useState(false)
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = data;

  const changeHandler = (e) => {
    console.log('handler, ', e);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    const body = {
      username,
      password,
    };
    e.preventDefault();
    setData({
      username: '',
      password: '',
    });
    console.log('About to fetch sync');
    fetch('/api/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((resp) => {
        console.log('fetched successfully to /api/sync');
      })
      .catch((err) => console.log('Error: ', err));
  };

  return (
    <header className='header'>
      {' '}
      <div className="header-login">
        <span className="login-text">Vault Login</span>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            name='username'
            value={username}
            placeholder='username'
            onChange={changeHandler}
          />
          <br />
          <input
            type='password'
            name='password'
            value={password}
            placeholder='password'
            onChange={changeHandler}
          />
          <br />
          <input type='submit' name='submit' value='Add Account to Dashboard' />
        </form>
      </div>
    </header>
  );
}

// return (
//   <header class="header">
//     <div class="header-search">Welcome Logged In User</div>
//   </header>
// )
// };

export default Header;
