import React, {Component} from 'react';


class Delete extends Component {
render() {
  return(
    <div className="controls-pt">
      <button id="shadow" name="DELETE" className="btn btn-control btn--white update-pt" onClick={e => this.props.onClick(e.target.name)} >DELETE</button>
      {/* <button id="shadow" name="CLEAR" className="btn btn-control btn--white update-pt" onClick={e => this.props.onClick(e.target.name)} >CLEAR</button> */}
    </div>
  )
}
}

export default Delete;