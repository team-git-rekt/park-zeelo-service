import React from 'react';
import Carousel from './Carousel.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      isOpen: false,
      props: props
    }
    this.handleShowDialog = this.handleShowDialog.bind(this)
  }

  handleShowDialog(){
    this.setState({ isOpen: !this.state.isOpen });
    console.log("clicked modal");
  };
  
  render() {
    return (
      <div>
        <img
          className="small"
          src="http://www.everyonelovesdogs.com/wp-content/uploads/2016/07/Blue-pitbull.jpg"
          onClick={this.handleShowDialog}
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
          >
            <div className="modal">
              <Carousel />
              <span className="close">&times;</span>
            </div>
            
          </dialog>
        )}
      </div>
    );
  }
};

  
export default Modal

