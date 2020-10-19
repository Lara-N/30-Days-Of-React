import React from 'react';
import ReactDOM from 'react-dom';
import mhImage from './images/mh.jpeg';
import myInfo from './myInfo';


const headerStyles = {
  backgroundColor: '#FFAAFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}

const header = (
  <header>
    <div className='header-wrapper'>
        <h1>Welcome :)</h1>
      </div>
  </header>
  )

//JSX from day-02

const myName = (
  <h1>Melissa Huerta</h1>
);


//info


const myInfoFormatted = Object.values(myInfo).map((e) => <p key={e}>{e}</p>)

//inserting media objects in react
const myPicture = (
  <div>
    <img src={mhImage} alt='melissa huerta' width='150px'/>
  </div>
);

const mainStyles = {
  backgroundColor: '#A3A0BB',
}

//JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      {myName}
      {myPicture}
      {myInfoFormatted}
    </div>
  </main>
  );

const footerStyles = {
  backgroundColor: '#B3F0A5',
}

//Write a footer JSX element
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
) 

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)


const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)
