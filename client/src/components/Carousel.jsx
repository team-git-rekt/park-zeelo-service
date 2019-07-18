import React from 'react';
import Arrow from './Arrow.jsx'
import ImageSlide from './ImageSlide.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: this.props.currentImageIndex
    };

    this.previousSlide = this.previousSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
  }

  previousSlide () {
    const lastIndex = this.props.imageUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = this.props.imageUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render () {
    return (
      <div className="carousel">

        <Arrow className="left-arrow" direction='left' clickFunction={ this.previousSlide } glyph="&#9001;" />
        
        <ImageSlide url={ this.props.imageUrls[this.state.currentImageIndex] } onClick={ this.nextSlide } />

        <Arrow className="right-arrow" direction='right' clickFunction={ this.nextSlide } glyph='&#9002;' />

      </div>
    );
  }
}

export default Carousel
