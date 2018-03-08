import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Left from './Left'
import Right from './Right'

const reducer = (state = {}, action) => {
  if (action.type === 'SHOW_CONTEXT') {
    return { showContext: true }
  }
  return state
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Left />
          <Right />
        </div>
      </Provider>
    );
  }
}

export default App;
