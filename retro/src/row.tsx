import React, { Component } from 'react'

class Row extends Component<any> {

    render() {

        const test : Array<any> = new Array<any>();

        for(var i :number = 0; i < this.props.width; i++) {

                let hasfood : string = "";

                if(this.props.hasFood && this.props.food.x === i)
                {
                    hasfood = " food"
                }

                test[i] = (<span className={"pixel x"+i+ " y"+this.props.value + hasfood}></span>)
        }

        return(
        <div className="row" key={this.props.value}>
            {test}
        </div>
        )
    }
}

export default Row;