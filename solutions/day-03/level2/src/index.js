import React from 'react';
import ReactDOM from 'react-dom';
import frontendTechnologies from './technologies';
import suscription from './suscription';
import card from './card';



const app = (
  <div>
    {frontendTechnologies}
    {card}
    {suscription}
  </div>
);

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)