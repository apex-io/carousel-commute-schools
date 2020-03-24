import styled from "styled-components";
import px2vw from "./px2vw.jsx";

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: ${px2vw(10)};
  max-width: 100%;
  justify-content: center;


  @media (min-width: 500px) {
    flex-wrap: wrap;
  }
`;

export const Box = styled.img`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  margin: ${px2vw(5)};
  height: 100%;

  @media (min-width: 8px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 4px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const TopImage = styled.img`
display: flex;
  flex-direction: column;
  height: 100%;
  align-content: center;
  width: ${px2vw(320, 500)};
  
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const TopImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  


  @media (min-width: 500px) {
    flex-wrap: wrap;
  }
`;