import React from 'react'
import axios from 'axios'
import PictureGrid from './pictureGrid.jsx'  // rember this shit "no lower case"

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
    renderTableData() {
        return this.state.fakeUrls.map((obj, index) => {
           const { id, fakeHouseID, url, updatedAt, createdAt } = obj //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td><img src={url} /></td>
              </tr>
           )
        })
     }
    

     render() {
        return (
           <div>
              <h1 id='title'>React Dynamic Table</h1>
              <table id='students'>
                 <tbody>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
}

export default RenderPics