import React from 'react';

import Grid from './grid';

import'./field.css';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridValues: Array(9).fill('.'),
            xTurn: true,
        }
    }

    /*
     * returns the grid with the relevant value ('.', 'X' or 'O')
     */
    getGrid(gridNr) {
        return <Grid value={this.state.gridValues[gridNr]} onClick={() => this.gridClick(gridNr)} />
    }

    /*
     * Action to be performed after a click
     */
    gridClick(gridNr) {
        //get the current grid values
        var newGrids = this.state.gridValues.slice();

        //Don't do anything if the grid is already used
        if(newGrids[gridNr] != '.') {
            return;
        }

        //set the value of the grid depending on who's turn it was
        newGrids[gridNr] = this.state.xTurn ? 'X' : 'O';
        this.setState({
            gridValues: newGrids,
            xTurn: !this.state.xTurn,
        });
    }

    render() {
        var turn = this.state.xTurn ? " turnX" : " turnO";

        return(
            <div className='field'>
                <div className="fieldRow">
                    {this.getGrid(0)}
                    {this.getGrid(1)}
                    {this.getGrid(2)}
                </div>
                <div className="fieldRow">
                    {this.getGrid(3)}
                    {this.getGrid(4)}
                    {this.getGrid(5)}
                </div>
                <div className="fieldRow">
                    {this.getGrid(6)}
                    {this.getGrid(7)}
                    {this.getGrid(8)}
                </div>
                <div className={"fieldRow" + turn} />
            </div>
        );
    }
}
export default Field;