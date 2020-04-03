import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){ // create a constructor function fot classes that extend React classes.
    super(props); // passing an argument into super(props) called "props".
    this.state = { // the super() fucntion will make this available in the constructor method. 
      meals : [
        {name: "Breakfast", votes: 0},
        {name: "Lunch", votes: 0},
        {name: "Tea", votes: 0},
        {name: "Dinner", votes: 0}
      ]
    }
  }

  vote (a) {
    let newMeals = [...this.state.meals];
    newMeals[a].votes++;
    function swap(array, b, c) {
      var temp = array[b];
      array[b] = array[c];
      array[c] = temp;
    }
    this.setState({meals: newMeals});

  }

  render(){
    return(
      <>
        <h1>Which one is the most important meal time to take?</h1>
        <div className="meals">
          {
            this.state.meals.map((mil, b) => 
              <div key={b} className="meal">
                <div className="voteCount">
                  {mil.votes}
                </div>
                <div className="mealName">
                  {mil.name}
                </div>
                <button onClick={this.vote.bind(this, b)}>Vote</button>
              </div>
            )
          }
        </div>
      </>
    );
  }
}

export default App;