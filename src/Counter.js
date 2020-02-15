import React from 'react';
import './index.css';

class Counter extends React.Component {

    getBadgeClasses() {
        let classes = "number-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes
    }

    formatCount() {
        const { value } = this.props.counter; 
        return value === 0 ? 'Zero' : value;
    }

    render() {
        return (
            <div className="counter" >               
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="increment" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
                <button className="delete" onClick={() => {this.props.onDelete(this.props.counter.id)}}>Delete</button>
            </div>
        )
    }

}

export default Counter;