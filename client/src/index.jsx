import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from './components/Carousel.jsx';

class App extends React.Component {

  render (){
    return (
      <div>
        <Carousel />
      </div>
    )
  }
}


ReactDOM.render(<Carousel />, document.getElementById('container'));
