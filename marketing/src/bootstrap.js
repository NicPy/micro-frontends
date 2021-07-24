import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

console.log('bootstrap');

const mount = (element) => {
    ReactDOM.render( 
        <App/>,
        element, 
    )
}

// @ts-ignore
if(process.env.NODE_ENV === 'development'){
    const mountPoint = document.querySelector('#marketing-root');
    console.log("DEVVV, ", mountPoint);
    mountPoint && mount(mountPoint)
};

export {mount};