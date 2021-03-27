import React, { Component } from 'react'
import Row from './row'
import Food from './food'

class Board extends Component<{}, { width : number, height : number, food : Food }> {

    constructor(props : any){
        super(props);

        this.state = {
            width: 40,
            height: 30,
            food: new Food(40, 30)
        }
    };

    render() {
        
        const rows : Array<any> = new Array<any>(this.state.width);

        for(let i : number = 0; i < this.state.height; i++){
            let hasFood = false;
            if(i === this.state.food.y)
            {
                hasFood = true;
            }
            rows[i] = (<Row value={i} width={this.state.width} food={this.state.food} hasFood={hasFood} />)
        }

        return (
            <div className="board">
                {rows}
            </div>
        );
    }
}

export default Board;