import React from 'react';
import Counter from './Counter.js'
import './index.css';

class Counters extends React.Component {
  render() {
    const { onReset, counters, onDelete, onIncrement} = this.props
    return (
      <div>
        <button className="reset" onClick={onReset}>Reset</button>

        { counters.map(counter => 
        <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter}>
          
        </Counter>
        )}       
      </div>
    )
  }

}

export default Counters;
