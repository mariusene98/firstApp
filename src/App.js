import React from 'react';
import Counters from "./Counters";
import NavBar from "./NavBar";
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          counters: [
          { id: 1, value: 0},
          { id: 2, value: 0},
          { id: 3, value: 0},
          { id: 4, value: 0}
          ]
        }   
      }
    
    handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter};
      counters[index].value++;
      this.setState({ counters });
    };
    
      handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters })
      };
    
      handleReset = () => {
        const counters = this.state.counters.map(c => {
          c.value=0;
          return c;
        })
        this.setState({ counters });
        console.log(this.state);
      };

    render() {
        return (
            <div className="bla">
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <Counters onDelete={this.handleDelete} onReset={this.handleReset} onIncrement={this.handleIncrement} counters={this.state.counters} />
            </div>
        )
    }
}

export default App;