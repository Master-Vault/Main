import React, { useState, useEffect } from 'react';

function Navigation(props) {
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
        <input type='submit' name='submit' value='Add Account to Dashboard' />
      </form>
    </div>
  );
}

export default Navigation;

// useEffect(()=>{
//   async function reloadPage(){
//     location.reload();
//    }
//  reloadPage()
// },[haveNotLoggedIn])
