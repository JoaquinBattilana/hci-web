import React from 'react';

function Button({ handleClick, img, label }) {
    return <button onClick={handleClick}>{img? <img src={img}></img> : {label} }</button>;
}

export default Button;