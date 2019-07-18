import React from 'react'
import Modal from './Modal.jsx'
import axios from 'axios'

class Main extends React.Component {
  constructor() {
    super()

    this.state = {
      imageUrls: [],
      isOpen: false,
      currentImageIndex: null
    }

    this.handleToggleModal = this.handleToggleModal.bind(this)
    this.handleClickedImage = this.handleClickedImage.bind(this)
    this.getImageUrls = this.getImageUrls.bind(this)
  }
  
  getImageUrls() {
    // axios.get(`http://localhost:4000/houses1/${window.location.pathname.slice(1)}`)
    axios.get(`http://ec2-54-174-192-32.compute-1.amazonaws.com:4000/houses1/${window.location.pathname.slice(1)}`)
    .then((response) => {
    
      this.setState({
        imageUrls: [
          ...response.data[0].images
        ]
      }) 
    })
    .catch(function (error) {
      console.log(error)
    })
  } 

  componentDidMount() {
    this.getImageUrls();
  }

  handleToggleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClickedImage(index) {
    return () => {
      this.setState( { currentImageIndex: index})
      this.handleToggleModal();
    }
  }

  render () {
    const subImages = this.state.imageUrls.slice(1).map((subImage, index) => {
      return (
       <img className="sub-img" src={ subImage } onClick={this.handleClickedImage(index + 1)} />
      )
    });
  
    return (
      <div className="main" >
          <img className="main-img" src={ this.state.imageUrls[0] } onClick={this.handleClickedImage(0)} />
        <div className="sub-cont" >
          <span className="subImages">{subImages}</span>
        </div>
        <Modal currentImageIndex={this.state.currentImageIndex} onClickClose={this.handleToggleModal} isOpen={this.state.isOpen} imageUrls={this.state.imageUrls}/>
      </div>
    )
  }
}

export default Main