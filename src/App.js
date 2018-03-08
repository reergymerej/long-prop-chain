import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Left from './Left'
import LeftIOC from './LeftIOC'
import Right from './Right'
import RightIOC from './RightIOC'

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
  state = {
    showFeaturesOnLeft: true,
  }

  handleClick = () => {
    this.setState({ showFeaturesOnLeft: !this.state.showFeaturesOnLeft })
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <button onClick={this.handleClick}>toggle</button>
          <div>
            <h3>Inversion of Control</h3>
            <div className="row">
              <LeftIOC leftIsSpecial={this.state.showFeaturesOnLeft} />
              <RightIOC />
            </div>
          </div>

          <div>
            <h3>Passing Props</h3>
            <div className="row">
              <Left leftIsSpecial={this.state.showFeaturesOnLeft} />
              <Right />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
