import React, {Component} from 'react';
import Circle from './component/Circle/Circle'
import './App.css';

class App extends Component {
  state = {
      numbers: []
  };
  generatorNumber = () => {
    let arr = [];
    for (let i = 0; i < 5;){
        const number = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
        if (arr.includes(number)) {
            continue;
        } else {
            arr.push(number);
            i++
        }

    }
    arr.sort(function (a,b) {
        return a - b
    })
      this.setState({
          numbers: arr
      });
      // for ( let i = 0; i < arr.length; i++){
      //     for (let j = 0; j < arr.length; j++){
      //         if (arr[i] < arr[j]){
      //             var bols = arr[i];
      //             arr [i] = arr [j];
      //             arr [j] = bols;}
      //
      //     }
      //
      // }



  }


  render() {
    return (

      <div className='main'>
        <button className = 'btn' onClick = {this.generatorNumber}>New numbers</button>
        <div>
        <Circle num = {this.state.numbers[0]}/>
        <Circle num = {this.state.numbers[1]}/>
        <Circle num = {this.state.numbers[2]}/>
        <Circle num = {this.state.numbers[3]}/>
        <Circle num = {this.state.numbers[4]}/>

        </div>
      </div>
    )
  }
}
export default App;
