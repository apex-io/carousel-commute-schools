import React from 'react'
import Picture from './picture.jsx'
import Arrow from './arrow.jsx'



class SlideShow extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentImageIndex: this.props.index,
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = this.props.urls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    
      nextSlide () {
        const lastIndex = this.props.urls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
      }

    render () {
        
      return (
        <div className="slideshow">
            <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />

            <Picture url={ this.props.urls[this.state.currentImageIndex].url}/>

            <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />
          <h1 onClick={this.props.return} style={{position: 'absolute', top: '10px', right:'10px'}}>X</h1>

        </div>
      );
    }
  }

export default SlideShow