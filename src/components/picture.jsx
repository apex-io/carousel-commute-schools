import React from 'react'

const picture = function (props) {
    return (
      <div>
        <img src={props.image.url} style={{width: 200, height: 200}}/>
      </div>
    )
  }

export default picture