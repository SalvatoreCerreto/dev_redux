import React, { Component } from 'react';  
import { combineReducers } from 'redux';  
import { Provider } from 'react-redux';

//import { createStore, renderDevTools } from '../utils/devTools';
 
import Hello from '../components/Hello';


export default class App extends Component {  
  render() {
    return (
      <div>

		<Hello />

      </div>
    );
  }
}

