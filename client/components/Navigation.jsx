import React, { useState } from 'react';

function Navigation(props) {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = data;

  const changeHandler = (e) => {
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
    fetch('/api/sync', {
      method: 'POST',
      headers: {
        'Content=Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .catch((err) => console.log('Error: ', err));
  };
  return (
    <div className='Navigation'>
      {' '}
      Vault Login
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
        <input type='submit' name='Sync' value='Sync' />
      </form>
    </div>
  );
}

export default Navigation;
