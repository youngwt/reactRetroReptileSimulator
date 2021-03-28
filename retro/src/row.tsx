import React, { Component } from 'react'

class Row extends Component<any> {

    render() {

        const test : Array<any> = new Array<any>();

        for(var i :number = 0; i < this.props.width; i++) {

                let isFilled : string = "";

                if(this.props.hasFood && this.props.food.x === i)
                {
                    isFilled = " food";
                }

                if(this.props.hasSnake && this.props.snake.isSnakeOnPixel(i)) {
                    isFilled = " snake";
                }

                test[i] = (<span className={"pixel x"+i+ " y"+this.props.value + isFilled}></span>);
        }

        return(
        <div className={"row " + this.props.value}>
            {test}
        </div>
        )
    }
}

export default Row;