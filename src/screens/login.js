import React from 'react';

import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import CheckIcon from 'mdi-react/CheckIcon';

import { createStyle } from 'flcss';

class Login extends React.Component
{
  constructor()
  {
    super();

    this.state = {
      save: false,
      username: '',
      password: ''
    };
    
    document.title = 'Example - Login';

    window.scrollTo(0, 0);

    this.onPress = this.onPress.bind(this);

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

    this.onLogin = this.onLogin.bind(this);
  }

  componentDidMount()
  {
    window.addEventListener('keypress', this.onPress);
  }

  componentWillUnmount()
  {
    window.removeEventListener('keypress', this.onPress);
  }

  /**
  * @param { KeyboardEvent } e
  */
  onPress(e)
  {
    if (e.code === 'Enter')
      this.onLogin();
  }

  /**
  * @param { Event } e
  */
  onUsernameChange(e)
  {
    this.setState({
      username: e.target.value
    });
  }

  /**
  * @param { Event } e
  */
  onPasswordChange(e)
  {
    this.setState({
      password: e.target.value
    });
  }

  onLogin()
  {
    const { history } = this.props;

    const { username } = this.state;

    if (
      !document.querySelector('input[type="email"]').checkValidity() ||
      !document.querySelector('input[type="password"]').checkValidity()
    )
      return;

    localStorage.setItem('username', username);

    history.push('dashboard');
  }

  render()
  {
    const { save, username, password } = this.state;

    return <div className={ styles.wrapper } id={ 'pg-login' }>
      <div className={ styles.container }>
        {/* eslint-disable-next-line no-useless-escape */}
        <div className={ styles.title }>Email</div>
        <input
          type={ 'email' }
          className={ styles.input }
          pattern={ '\\S+@\\S+\\.\\S+' }
          value={ username }
          onChange={ this.onUsernameChange }
          required autoFocus
        />
        
        <div className={ styles.title }>Password</div>
        <input
          type={ 'password' }
          className={ styles.input }
          // minimal length of 8 characters
          // 1+ lowercase letter | 1+ uppercase letter | 1+ number | 1+ special character
          pattern={ '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{8,}$' }
          value={ password }
          onChange={ this.onPasswordChange }
          required
        />

        <div
          id={ 'ch-save' }
          className={ styles.checkbox }
          ticked={ save.toString() }
          onClick={ () => this.setState({ save: !save }) }
        >
          <CheckIcon className={ styles.icon }/>
        </div>

        <div id={ 'btn-login' } className={ styles.button } onClick={ this.onLogin }>
          Login
        </div>
      </div>
    </div>;
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired
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

    width: '100vw',
    height: 'auto',
    maxWidth: '350px',

    fontWeight: 700,
    fontFamily: '"Montserrat", sans-serif',

    padding: '15vh 0',
    margin: 'auto'
  },

  title: {
    color: '#797676',
    userSelect: 'none',

    textTransform: 'uppercase',
    fontSize: 'calc(8px + 0.25vw + 0.25vh)',
    
    margin: '8px 0 -8px'
  },

  input: {
    color: '#f1f1f1',
    caretColor: '#f1f1f1',
    backgroundColor: '#191919',

    padding: '12px 25px 12px 10px',
    margin: '15px 0',
    border: 0,

    fontFamily: 'monospace',
    fontSize: 'calc(8px + 0.25vw + 0.25vh)',

    ':invalid': {
      color: '#cc2727'
    },

    '[type="password"]': {
      fontWeight: 700
    },

    ':focus': {
      outline: 'none'
    },

    '[type="email"]:invalid ~ div ~ div ~ div': {
      pointerEvents: 'none'
    },

    '[type="password"]:invalid ~ div ~ div': {
      pointerEvents: 'none'
    }
  },

  checkbox: {
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center',

    color: '#c3c3c3',
    backgroundColor: '#191919',

    width: '20px',
    height: '20px',

    borderRadius: '3px',

    margin: '10px 0 0',

    transition: 'transform 0.05s ease',

    ':hover':
    {
      backgroundColor: '#4a4a4a',

      '> svg': {
        color: '#f1f1f1'
      },

      ':after': {
        color: '#f1f1f1'
      }
    },

    ':active':
    {
      transform: 'scale(0.85)'
    },

    '[ticked="false"] > svg':
    {
      opacity: 0
    },

    ':after': {
      position: 'absolute',
      content: '"Remember Me"',
      color: '#797676',

      left: '30px',
      width: 'min-content',
      textTransform: 'uppercase',
      fontSize: 'calc(8px + 0.25vw + 0.25vh)'
    }
  },

  icon: {
    width: '16px',
    height: '16px',
    color: '#797676'
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

export default withRouter(Login);