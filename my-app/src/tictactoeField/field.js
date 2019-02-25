import React from 'react';

import Grid from './grid';

import sendData from '../dbSender/sendData'

import'./field.css';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridValues: Array(9).fill(null),
            xTurn: true,
            winner: null,
        }
    }

    /*
     * returns the grid with the relevant value ('.', 'X' or 'O')
     */
    getGrid(gridNr) {
        var gridVal = this.state.gridValues[gridNr];
        if (gridVal == null) {
            gridVal = '.';
        }
        return <Grid value={gridVal} onClick={() => this.gridClick(gridNr)} />
    }

    /*
     * Action to be performed after a click
     */
    gridClick(gridNr) {
        //get the current grid values
        var newGrids = this.state.gridValues.slice();

        //Don't do anything if the grid is already used
        if(newGrids[gridNr] != null || this.calcWinner() != null) {
            return;
        }


        //set the value of the grid depending on who's turn it was
        newGrids[gridNr] = this.state.xTurn ? 'X' : 'O';

        //add fieldState to the history
        let turn = Object.keys(history).length;
        history[turn] = newGrids;

        this.setState({
            gridValues: newGrids,
            xTurn: !this.state.xTurn,
        });
    }

    /*
     * calculates if someone has won
     */
    calcWinner() {
        let grids = this.state.gridValues;
        
        //check horizontal
        for(let i = 0; i < 9; i+=3) {
            if (grids[i] != null && grids[i] == grids[i+1] && grids[i] == grids[i+2]) {
                return grids[i];
            }
        }
        
        //check vertical
        for(let i = 0; i < 3; i++) {
            if (grids[i] != null && grids[i] == grids[i+3] && grids[i] == grids[i+6]) {
                return grids[i];
            }
        }

        //check diagonal
        if (grids[4] != null &&  ((grids[0] == grids[4] && grids[0] == grids[8]) || (grids[2] == grids[4] && grids[2] == grids[6])) ) {
            return grids[4];
        }
        return null;
    }

    render() {
        var status = this.state.xTurn ? " turnX" : " turnO";

        if (this.calcWinner() != null) {
            status = " winner" + this.calcWinner();
            sendData(history);
        }

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
                <div className={"fieldRow statusDiv" + status} />
            </div>
        );
    }
}

var history = {};

export default Field;