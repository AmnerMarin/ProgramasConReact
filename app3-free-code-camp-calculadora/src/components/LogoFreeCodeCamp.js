import React from 'react';
import freeCodeCampLogo from '../assets/freecodecamp.svg';
import '../stylesheet/LogoFreeCodeCamp.css';
function LogoFreeCodeCamp() {
    return (
        <div
            className='free-code-camp-logo-contenedor'>
            <img
                src={freeCodeCampLogo}
                className='free-code-camp-logo'
                alt='Logo de freeCodeCamp' />
        </div>
    );
}

export default LogoFreeCodeCamp;