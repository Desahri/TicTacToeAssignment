import React from 'react';

import './grid.css';

function Grid(props) {
    return(
        <button className="grid" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Grid;