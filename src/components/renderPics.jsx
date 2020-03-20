import React from 'react'
import axios from 'axios'
import Picture from './picture.jsx'  // rember this shit "no lower case"
import styled from 'styled-components'


export const Grid = styled.div`
`;

export const Row = styled.div`
  display: flex;
`;

const media = {
    xs: (styles) => `@media only screen and (max-width: 480px) {${styles}}`,
}

export const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`
    display: none;
    `)}
`;

class RenderPics extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            fakeHouse: {},
            fakeUrls: []
        }
    }
    componentDidMount() {
        // make axios call to get picture urls
        let otherThis = this
        axios({
            method: 'GET',
            url: '/api/gethomepictures'
          }) 
          .then(function (response) {
              otherThis.setState({
                  fakeHouse: response.data.fakeHouse[0],
                  fakeUrls: response.data.fakeUrls
            })
          })
          
    }
    
    
     render() {
       let otherThis = this
        return (
         <div id="mainContent" className="container">
           {this.state.fakeUrls.map(function (element, index, collection){
             console.log(otherThis.state.fakeUrls)
                    return (
                        <div>
                <Row>
                    <Col size={1}>
                        <img src={element.url} style={{width: 200, height: 200}}/>
                    </Col>
                    <Col size={1} collapse="xs">
                    <img src={element.url} style={{width: 200, height: 200}} />
                    </Col>
                </Row>
                </div>
                    )
                })}
       </div>
        )
     }
}

export default RenderPics