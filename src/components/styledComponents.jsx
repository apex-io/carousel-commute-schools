import React from 'react'
import styled from 'styled-components'
// installed styled components extension

// set something here two pictures per row
export const Grid = styled.div`

flex-flow: column;
`;

export const Row = styled.div`
flex-wrap: wrap;
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