import React from 'react';

import Grid from './grid';

import'./field.css';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridValues: [
                '.', '.', '.', 
                '.', '.', '.',
                '.', '.', '.', 
            ]
        }
    }
    getGrid(gridNr) {
        return <Grid value={this.state.gridValues[gridNr]} onClick={() => this.gridClick(gridNr)} />
    }
    gridClick(gridNr) {
        var newGrids = this.state.gridValues.slice();
        newGrids[gridNr] = 'O';
        this.setState({
            gridValues: newGrids 
        });
    }
    render() {
        return(
            <div className='field'>
                {this.getGrid(0)}
                {this.getGrid(1)}
                {this.getGrid(2)}
                <br></br>
                {this.getGrid(3)}
                {this.getGrid(4)}
                {this.getGrid(5)}
                <br></br>
                {this.getGrid(6)}
                {this.getGrid(7)}
                {this.getGrid(8)}
            </div>
        );
    }
}
export default Field;