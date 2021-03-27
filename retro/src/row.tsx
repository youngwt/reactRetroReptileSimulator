import React, { Component } from 'react'
import Cell from "./cell.js"

class Row extends Component<any> {

    render() {

        const test : Array<any> = new Array<any>();

        for(var i :number = 0; i < this.props.width; i++) {
                test[i] = (<span className="pixel x{i}, y{this.props.value}" ></span>)
        }

        return(
        <div className="row" key={this.props.value}>
            {test}
        </div>
        )
    }
}

export default Row;