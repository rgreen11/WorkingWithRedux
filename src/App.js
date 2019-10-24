import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { updateUser } from './actions/userActions';

function App(state) {

  console.log('this is props', state)
  const handleClick = () => {

    console.log(state.onUpdateUser('Success').user)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div onClick={() => handleClick()}>Update User</div>
      <h1>{state.user}</h1>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  products: state.products,
  user: state.user
})

const mapActiontoProps = {
  onUpdateUser: updateUser
}

export default connect(mapStatetoProps, mapActiontoProps)(App);
