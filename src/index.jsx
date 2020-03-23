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

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );