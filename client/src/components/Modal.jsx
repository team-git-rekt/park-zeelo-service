import React from 'react';
import Carousel from './Carousel.jsx';

class Modal extends React.Component {

  render() {
    return (
      <div>
        {this.props.isOpen && (
 
          <div className="modal">
            <Carousel currentImageIndex={this.props.currentImageIndex} imageUrls={this.props.imageUrls} onClick={this.handleShowDialog}/>
            <span className="close" onClick={this.props.onClickClose}>&times;</span>
          </div>

        )}
      </div>
    );
  }
};
  
export default Modal

