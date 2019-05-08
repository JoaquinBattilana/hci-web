import React from 'react';

function Button({ handleClick, img, label }) {
    return <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={handleClick}>{img ? <img src={img}></img> : label }</button>;
}

export default Button;