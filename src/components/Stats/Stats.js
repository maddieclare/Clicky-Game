import React from "react";

class Stats extends React.Component {
  render() {
    return (
      <div className="scores">
        <p>Score: {this.props.score}</p>
      </div>
    );
  }
}

export default Stats;
