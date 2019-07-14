import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main.jsx'

class App extends React.Component {

  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
  
}

ReactDOM.render(<App />, document.getElementById('container'));
