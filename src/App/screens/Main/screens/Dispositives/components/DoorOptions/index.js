import React from 'react'
import Button from '../../../../../../components/Button';

function DoorOptions({ handleClick }) {
    return(
        <Button onClick={handleClick} label="LOCK/UNLOCK"/>
    );
}

export default DoorOptions;
