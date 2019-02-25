import React from 'react';

import './grid.css';



function Grid(props) {
    let col = "";
    switch(props.value) {
        case 'X':
            col = " gridX";
            break;
        case 'O':
            col = " gridO";
            break;
        default:
            break;
    }
    return(
        <button className={"grid" + col} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Grid;