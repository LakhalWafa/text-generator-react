import React, { Component } from 'react';

class Text extends Component {
  state = {
    value: this.props.value
  };

  onChange = e => {
    this.setState(
      {
        value: e.target.value
      },
      function() {
        this.props.onChange(this.state.value);
      }
    );
  };

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.value}
          className="form-control  my-2 mr-sm-2"
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Text;
