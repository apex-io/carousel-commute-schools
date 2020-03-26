import React from 'react'
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import styled from 'styled-components'

const ChevronLeft = styled.button`
cursor: pointer;
  background: transparent;
  font-size: 30px;
  font-weight: 1000;
  border-radius: 3px;
  color: lightgrey;
  border: 2px solid lightgrey;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.2s all ease-out;
  &:hover {
    background-color: grey;
    color: skyblue;
    border: 2px solid white;
  }
  position: absolute;
  top: 300px;
  left: 10px;
`;
const ChevronRight = styled.button`
cursor: pointer;
  background: transparent;
  font-size: 30px;
  font-weight: 1000;
  border-radius: 2px;
  color: lightgrey;
  border: 2px solid lightgrey;
  margin: 0 1em;
  padding: 0.25em 1em;
  position: absolute;
  top: 300px;
  right: 10px;

  transition: 0.2s all ease-out;
  &:hover {
    background-color: grey;
    color: skyblue;
    border: 2px solid white;
  };
  
`;



export const Arrow1 = ({ direction, clickFunction, glyph }) => {
  const styles = {
    position: 'absolute',
    top: '350px',
    left: '10px'
  }
  return (
    <ChevronLeft  className={ `slide-arrow ${direction}` } onClick={ clickFunction } >
      {'<'}
    </ChevronLeft>
  );
}

export const Arrow2 = ({ direction, clickFunction, glyph }) => {
  const styles = {
    position: 'absolute',
    top: '350px',
    right: '10px'
  }
  return (
    <ChevronRight  className={ `slide-arrow ${direction}`}onClick={ clickFunction }>
      {'>'}
    </ChevronRight>
  );
}


