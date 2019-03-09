import React, { Component } from 'react';
import './App.css';

import Buttons from './components/Buttons';
import Result from './components/Result';
import Delete from './components/Delete';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      finalresult: " "
    }
  }


  // Keyboard OnClick Function
  onClick = (button) => {
    // console.log(button.target.id)
    if(button === "DELETE") {
      this.backward();
    } 
    else if (button === "CLEAR") {
      this.reset();
    }
    else {
      this.setState({
        finalresult: this.state.finalresult + button
      })
    }
  }

  reset = () => {
    this.setState({
      finalresult: ""
    })
  }

  backward = () => {
    this.setState({
      finalresult: this.state.finalresult.slice(0, -1)
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="wrapper-pt">
          <div className="container">
            <div className="copyright__pt copyright--top__pt">
              <p>Xologate Prototype</p>
            </div>
              <div className="holder-pt holder-pt--large" >
                <div className="keyboard-pt">
                  <Buttons onClick={this.onClick} />
                </div>

                <div className="cols-pt">
                  <div className="col-pt col-pt--fol3 deleteTestLeft">
                    <Delete onClick={this.onClick}/>
                  </div>
                  <div className="col-pt col-pt--fol2">
                    <Result result={this.state.finalresult} />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
