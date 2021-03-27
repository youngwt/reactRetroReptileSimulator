import React from 'react'

// interface Cell {
//     key : number
// }

class Cell extends React.Component {

    
    render() {
        return (
            <span className="pixel" key={this.props.value}>
                
            </span>
        );
    }
}

export default Cell;