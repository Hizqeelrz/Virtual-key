import React, {Component, Fragment} from 'react';

class Buttons extends Component {

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
          <button id="shadow" className="btn btn-action update-pt" name="Shift" onClick={e => this.props.onClick(e.target.name)}>Shift</button>        
        </div>

        <div className="keyboard-row-pt">
          {/* <button id="shadow" className="btn btn-letter update-pt" name="shift" onClick={e => this.props.onClick(e.target.name)}>Shift</button> */}
          <button id="shadow" className="btn btn-letter update-pt" name="a" onClick={e => this.props.onClick(e.target.name)}>a</button>
          <button id="shadow" className="btn btn-letter update-pt" name="b" onClick={e => this.props.onClick(e.target.name)}>b</button>
          <button id="shadow" className="btn btn-letter update-pt" name="c" onClick={e => this.props.onClick(e.target.name)}>c</button>
          <button id="shadow" className="btn btn-letter update-pt" name="d" onClick={e => this.props.onClick(e.target.name)}>d</button>

          <button id="shadow" className="btn btn-letter update-pt" name="e" onClick={e => this.props.onClick(e.target.name)}>e</button>
          <button id="shadow" className="btn btn-letter update-pt" name="f" onClick={e => this.props.onClick(e.target.name)}>f</button>
          <button id="shadow" className="btn btn-letter update-pt" name="g" onClick={e => this.props.onClick(e.target.name)}>g</button>
          <button id="shadow" className="btn btn-letter update-pt" name="h" onClick={e => this.props.onClick(e.target.name)}>h</button>

          <button id="shadow" className="btn btn-letter update-pt" name="i" onClick={e => this.props.onClick(e.target.name)}>i</button>
          <button id="shadow" className="btn btn-letter update-pt" name="j" onClick={e => this.props.onClick(e.target.name)}>j</button>
          <button id="shadow" className="btn btn-letter update-pt" name="k" onClick={e => this.props.onClick(e.target.name)}>k</button>
          <button id="shadow" className="btn btn-letter update-pt" name="l" onClick={e => this.props.onClick(e.target.name)}>l</button>

          <button id="shadow" className="btn btn-letter update-pt" name="m" onClick={e => this.props.onClick(e.target.name)}>m</button><br/>
          <button id="shadow" className="btn btn-letter update-pt" name="n" onClick={e => this.props.onClick(e.target.name)}>n</button>
          <button id="shadow" className="btn btn-letter update-pt" name="o" onClick={e => this.props.onClick(e.target.name)}>o</button>
          <button id="shadow" className="btn btn-letter update-pt" name="p" onClick={e => this.props.onClick(e.target.name)}>p</button>

          <button id="shadow" className="btn btn-letter update-pt" name="q" onClick={e => this.props.onClick(e.target.name)}>q</button>
          <button id="shadow" className="btn btn-letter update-pt" name="r" onClick={e => this.props.onClick(e.target.name)}>r</button>
          <button id="shadow" className="btn btn-letter update-pt" name="s" onClick={e => this.props.onClick(e.target.name)}>s</button>
          <button id="shadow" className="btn btn-letter update-pt" name="t" onClick={e => this.props.onClick(e.target.name)}>t</button>

          <button id="shadow" className="btn btn-letter update-pt" name="u" onClick={e => this.props.onClick(e.target.name)}>u</button>
          <button id="shadow" className="btn btn-letter update-pt" name="v" onClick={e => this.props.onClick(e.target.name)}>v</button>
          <button id="shadow" className="btn btn-letter update-pt" name="w" onClick={e => this.props.onClick(e.target.name)}>w</button>
          <button id="shadow" className="btn btn-letter update-pt" name="x" onClick={e => this.props.onClick(e.target.name)}>x</button>

          <button id="shadow" className="btn btn-letter update-pt" name="y" onClick={e => this.props.onClick(e.target.name)}>y</button>
          <button id="shadow" className="btn btn-letter update-pt" name="z" onClick={e => this.props.onClick(e.target.name)}>z</button>
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