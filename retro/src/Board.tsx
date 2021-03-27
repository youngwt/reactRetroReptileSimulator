import React, { Component } from 'react'
import Row from './row'

class Board extends Component<{}, { width : number, height : number }> {

    constructor(props : any){
        super(props);

        this.state = {
            width: 40,
            height: 30
        }
    }

    render() {
        
        const rows : Array<any> = new Array<any>(this.state.width);

        for(let i : number = 0; i < this.state.height; i++){
            rows[i] = (<Row value={i} width={this.state.width} />)
        }

        return (
            <div className="board">
                {rows}
            </div>
        );
    }
}

export default Board;