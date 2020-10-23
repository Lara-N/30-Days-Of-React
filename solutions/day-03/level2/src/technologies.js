import React from 'react';
import css_logo from './images/css_logo.png'
import html_logo from './images/html_logo.png'
import js_logo from './images/js_logo.png'
import react_logo from './images/react_logo.png'

const frontendTitle = {
    fontFamily: 'Source Sans Pro',
    fontSize: 13,
    padding: '15px 0px 0px 0px',
    'text-align': 'center',
}

const frontendImages = {
    margin: 'auto',
    width: '700px',
    padding: '30px 0px',
    display: 'flex',
    'justify-content': 'space-between',
}

const frontendTechStyles = {
    backgroundColor: '#f0f1f7',
}

const frontendTechnologies = (
    <div  style={frontendTechStyles}>
        <h3 style={frontendTitle}>Front End Technologies</h3>
        <div style={frontendImages}>
            <img src={html_logo} width='170px'/>
            <img src={css_logo} width='170px'/>
            <img src={js_logo} width='172px'/>
            <img src={react_logo} width='170px'/>
        </div>
    </div>
);

export default frontendTechnologies;