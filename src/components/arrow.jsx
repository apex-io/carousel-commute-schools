import React from 'react'
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import styled from 'styled-components'

const Chevron = styled.div`

`


export const Arrow1 = ({ direction, clickFunction, glyph }) => {
  const styles = {
    position: 'absolute',
    top: '350px',
    left: '10px'
  }
  return (
    <div style={styles}
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }><FaChevronCircleLeft size={40}/>
    </div>
  );
}

export const Arrow2 = ({ direction, clickFunction, glyph }) => {
  const styles = {
    position: 'absolute',
    top: '350px',
    right: '10px'
  }
  return (
    <div style={styles}
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }><FaChevronCircleRight size={40}/>
    </div>
  );
}


