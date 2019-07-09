import React from 'react';
import Arrow from './Arrow.jsx'
import ImageSlide from './ImageSlide.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImageIndex: 0,
      imgUrls: [
        "https://previews.123rf.com/images/dixi_/dixi_1512/dixi_151200130/50274571-gray-puppy-cane-corso-on-the-grass.jpg",
        "https://previews.123rf.com/images/dixi_/dixi_1512/dixi_151200072/50274407-portrait-of-a-gray-puppy-cane-corso-on-the-grass.jpg",
        "https://previews.123rf.com/images/dixi_/dixi_1512/dixi_151200023/50274263-black-cane-corso-puppy-in-the-grass.jpg"
    ]
    };

    this.previousSlide = this.previousSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
  }

  previousSlide () {
    const lastIndex = this.state.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = this.state.imgUrls.length - 1;
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
     
        <Arrow direction='left' clickFunction={ this.previousSlide } glyph="&#9664;" />

        <ImageSlide url={ this.state.imgUrls[this.state.currentImageIndex] } />

        <Arrow direction='right' clickFunction={ this.nextSlide } glyph='&#9654;' />

      </div>
    );
  }
}

export default Carousel