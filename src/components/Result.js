import React, {Component} from 'react'

class Result extends Component {

  render() {
    let {result} = this.props;
    return (
      <div className="progress-holder-pt" >
        <div className="progress-pt progress-pt--white">
          <div className="message-pt">
            <p>{result}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Result;