import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from './components/Carousel.jsx';
import Main from './components/Main.jsx'

class App extends React.Component {
  
  constructor() {
    super ()

    this.state ={
      view: 'main'
    }

    this.renderView = this.renderView.bind(this)
  }

  renderView() {
    const {view} = this.state;
    if (view === 'main') {
      return <Main />
    } else {
      return <Carousel />
    }
  }

  render() {
    return (
      <div>
        {/* <Carousel />  */}
        {this.renderView()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
