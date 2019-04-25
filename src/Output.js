import React, { Component } from 'react';

class Output extends Component {
  state = {
    value: this.props.value
  };
  render() {
    return (
      <div>
        <div class="card shadow">
          <div class="card-body">{this.props.value}</div>
        </div>
      </div>
    );
  }
}

export default Output;
