import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { createStyle } from 'flcss';

const Dashboard = () =>
{
  const history = useHistory();
  const [ username ] = useState(localStorage.getItem('username'));

  useEffect(() =>
  {
    document.title = 'Example - Dashboard';

    window.scrollTo(0, 0);
  }, []);

  return <div className={ styles.wrapper } id={ 'pg-dashboard' }>
    <div className={ styles.container }>
      <div>
        { username ? `Logged in as ${username}` : 'You are not logged in.' }
      </div>

      <div id={ 'btn-logout' } className={ styles.button } onClick={ () =>
      {
        localStorage.removeItem('username');
        history.push('/');
      } }>
        { username ? 'Logout' : 'Login' }
      </div>
    </div>
  </div>;
};

const styles = createStyle({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',

    width: '100vw',
    height: '100vh',
    backgroundColor: '#000000'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    
    color: '#f1f1f1',

    userSelect: 'none',
    textAlign: 'center',
    textTransform: 'uppercase',

    width: '100vw',
    height: 'auto',
    maxWidth: '350px',

    fontWeight: 700,
    fontFamily: '"Montserrat", sans-serif',

    padding: '15vh 0',
    margin: 'auto'
  },

  button: {
    cursor: 'pointer',
    userSelect: 'none',

    color: '#797676',

    padding: '15px',
    margin: '25px 0',
    borderRadius: '3px',

    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 'calc(9px + 0.35vw + 0.35vh)',

    transition: 'transform 0.05s ease',

    ':hover': {
      color: '#f1f1f1',
      backgroundColor: '#101010'
    },

    ':active': {
      transform: 'scale(0.85)'
    }
  }
});

export default Dashboard;