import React, {Component, Fragment} from 'react';

class Buttons extends Component {

  constructor() {
    super();
    this.state = {
      alphabets: ['a','b','c','d','e','f','g','h','i','j','k','l',
                  'm','n','o','p','q','r','s','t','u','v','w','x','y','z']
    }
  }

  clickChange = () => {
    this.setState(prevState => ({
            alphabets: prevState.alphabets.map((letter) => letter.toLowerCase() === letter ? letter.toUpperCase() : letter.toLowerCase())
        })
    )
  }

  // Another Way to change to the previous state

  // clickChange = () => {
  //   this.setState(prevState => {
  //       const alphabets = prevState.alphabets.join('');
  //       if(prevState.alphabets[0].toLowerCase() === prevState.alphabets[0]) alphabets = alphabets.toUpperCase();
  //       else alphabets = alphabets.toLowerCase();
  //       return {
  //           alphabets: alphabets.split('')
  //       }
  //   })
  // }

  render() {
    return(
      <Fragment>

        <div className="keyboard-row-pt keyboard-row-small-pt">
          <button id="shadow" name="0" className="btn btn-symbol btn-number update-pt" onClick={e => this.props.onClick(e.target.name)}>0</button>
          <button id="shadow" name="1" className="btn btn-symbol btn-number update-pt" onClick={e => this.props.onClick(e.target.name)} >1</button>
          <button id="shadow" name="2" className="btn btn-symbol btn-number update-pt" onClick={e => this.props.onClick(e.target.name)} >2</button>
          <button id="shadow" name="3" className="btn btn-symbol btn-number update-pt" onClick={e => this.props.onClick(e.target.name)} >3</button>
          <button id="shadow" name="4" className="btn btn-symbol btn-number update-pt" onClick={e => this.props.onClick(e.target.name)} >4</button>
          <button id="shadow" name="5" className="btn btn-symbol btn-number update-pt" onClick={e => this.props.onClick(e.target.name)} >5</button>
          <button id="shadow" name="6" className="btn btn-symbol btn-number update-pt" onClick={e => this.props.onClick(e.target.name)} >6</button>
          <button id="shadow" name="7" className="btn btn-symbol btn-number update-pt" onClick={e => this.props.onClick(e.target.name)} >7</button>
          <button id="shadow" name="8" className="btn btn-symbol btn-number update-pt" onClick={e => this.props.onClick(e.target.name)} >8</button>
          <button id="shadow" name="9" className="btn btn-symbol btn-number update-pt" onClick={e => this.props.onClick(e.target.name)} >9</button>
        </div>
        <div className="keyboard-action-pt keyboard-action-left-pt">
          <button 
            id="shadow" 
            className="btn btn-action update-pt" 
            name="Shift"
            onClick={this.clickChange}
            >
            Shift
          </button>   
        </div>

        <div className="keyboard-row-pt">
          {this.state.alphabets.map((alphabet) => (
          <button
            key={alphabet.id}
            id="shadow" 
            className="btn btn-letter update-pt" 
            name={alphabet}
            onClick={e => this.props.onClick(e.target.name)}>
            {alphabet}
          </button>
          ))}
        </div>

        <div className="keyboard-row-pt keyboard-row-small-pt">
          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="!" onClick={e => this.props.onClick(e.target.name)} >!</button>
          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="@" onClick={e => this.props.onClick(e.target.name)} >@</button>
          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="#" onClick={e => this.props.onClick(e.target.name)} >#</button>
          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="$" onClick={e => this.props.onClick(e.target.name)} >$</button>

          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="%" onClick={e => this.props.onClick(e.target.name)} >%</button>
          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="^" onClick={e => this.props.onClick(e.target.name)} >^</button>
          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="&" onClick={e => this.props.onClick(e.target.name)} >&</button>
          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="*" onClick={e => this.props.onClick(e.target.name)} >*</button>

          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="?" onClick={e => this.props.onClick(e.target.name)} >?</button>
          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="+" onClick={e => this.props.onClick(e.target.name)} >+</button>
          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="-" onClick={e => this.props.onClick(e.target.name)} >-</button>
          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="=" onClick={e => this.props.onClick(e.target.name)} >=</button>

          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="/" onClick={e => this.props.onClick(e.target.name)} >/</button>
          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="|" onClick={e => this.props.onClick(e.target.name)} >|</button>
          <button id="shadow" className="btn btn-symbol update-pt" datatype="symbol" name="\" onClick={e => this.props.onClick(e.target.name)} >\</button>
        </div>
      </Fragment>
    )
  }
}

export default Buttons;