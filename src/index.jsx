import React from 'react'
import ReactDOM from 'react-dom'
import SlideShow from './components/slideShow.jsx'
import Global from "./components/globalStyle.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      <Global />
      <Home />
    </>
  );
}

const Carousel = App;

ReactDOM.render(
    <Carousel />,
    document.getElementById('Carousel')
  );