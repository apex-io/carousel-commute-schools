import React from 'react'
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

const App = () => {
    const arr = [1, 2, 3, 4, 7]
    return (
        <div className="App">
            <h1>Responsive Grid</h1>
            <Grid>
                {arr.map(function (element, index, collection){
                    return (
                        <div>
                        <Row>
                    <Col size={1}>
                        Long column
                    </Col>
                </Row>
                <Row>
                    <Col size={2}>
                        double the size of next Column
                    </Col>
                    <Col size={1} collapse="xs">
                        I will dissapear
                    </Col>
                    <Col size={1}>
                        hehe I'm small
                    </Col>
                </Row>
                </div>
                    )
                })}
            </Grid>
        </div>
    )
}



export default App