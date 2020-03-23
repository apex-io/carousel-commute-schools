import React from "react";
import axios from 'axios'
import SlideShow from './slideShow.jsx'

import { Container, Box, BoxTitle, BoxText } from "./stylePage.jsx"; // check these styles!

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fakeHouse: {},
      fakeUrls: [],
      firstHouse: {},
      slideShow: false,
      currentIndex: 0
    }
    this.returnHome = this.returnHome.bind(this)
  }

  componentDidMount() {
    let otherThis = this
    axios({
      method: 'GET',
      url: '/api/gethomepictures'
    })
      .then(function (response) {
        // set the state to contain our fakeHouse data
        otherThis.setState({
          fakeHouse: response.data.fakeHouse[0],
          fakeUrls: response.data.fakeUrls,
          firstHouse: response.data.fakeUrls[0]
        })
      })
  }
  returnHome() {
    this.setState({slideShow: false})
  }

  render() {
    if (this.state.slideShow) {
      return (
        <SlideShow index={this.state.currentIndex} urls={this.state.fakeUrls} return={this.returnHome}/>
      )
    }
    return (
      
      <Container>
        {this.state.fakeUrls.map( (obj, index) => (
        <Box key={index} bgColor='red' image={obj.url}>
          <img src={obj.url} onClick={() => {this.setState({slideShow: true, currentIndex: index})}} style={{objectFit: 'cover'}}/>
        </Box>
        ))}
      </Container>
    );
  }
}
export default Home