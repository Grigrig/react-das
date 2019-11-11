import React from 'react';
import './App.css';

import Header from './components/header/Header';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App;



// class App extends React.Component {

//   state = {
//     counter: "Armenia"
//   }

//   constructor(props) {
//     super(props);
//     this.handlerCounterUp = this.handlerCounterUp.bind(this);
//     this.handlerCounterDown = this.handlerCounterDown.bind(this);
//   }

//   handlerCounterUp() {
//     this.setState({counter: this.state.counter + "USA"});
//   }
//   handlerCounterDown() {
//     this.setState({counter: this.state.counter - "USA"});
//   }

// render() {
//   return (
//     <div className="App">
//        <button onClick={this.handlerCounterUp}>Counter up</button>
//        <button onClick={this.handlerCounterDown}>Counter down</button>
//        <p>My counter is {this.state.counter}</p>
//     </div>
//   );
// }
// }

// export default App;
