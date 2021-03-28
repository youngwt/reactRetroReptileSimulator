import React, { Component } from 'react'
import Row from './row'
import Food from './food'
import Snake from './snake'

class Board extends Component<{}, { width : number, height : number, food : Food, snake : Snake }> {

    constructor(props : any){
        super(props);

        this.state = {
            width: 40,
            height: 30,
            food: new Food(40, 30),
            snake: new Snake(this.randomInteger(40), this.randomInteger(30), 1)
        }
    };

    randomInteger(max : number) : number {
        return Math.floor(Math.random() * max);
    }

    render() {
        
        const rows : Array<any> = new Array<any>(this.state.width);

        for(let i : number = 0; i < this.state.height; i++){
            
            let hasFood = false;
            if(i === this.state.food.y)
            {
                hasFood = true;
            }

            let hasSnake = this.state.snake.isSnakeOnRow(i);

            rows[i] = (<Row value={i} 
                            width={this.state.width} 
                            food={this.state.food} 
                            hasFood={hasFood} 
                            hasSnake={hasSnake}
                            snake={this.state.snake}
                            />)
        }

        return (
            <div className="board">
                {rows}
            </div>
        );
    }
}

export default Board;