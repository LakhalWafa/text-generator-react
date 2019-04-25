import React, { Component } from 'react';
import Select from './Select';
import Text from './Text';
import Output from './Output';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import './App.css';

class App extends Component {
  state = {
    format: 'html',
    paras: '2',
    text: ''
  };

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText = () => {
    axios
      .get(
        `https://baconipsum.com/api/?type=meat-and-filler&format=${
          this.state.format
        }&paras=${this.state.paras}`
      )
      .then(res => this.setState({ text: res.data }))
      .catch(err => console.log(err));
  };

  getFormat = input => {
    this.setState({ format: input }, this.getSampleText());
  };

  getParas = x => {
    this.setState({ paras: x }, this.getSampleText());
  };

  render() {
    return (
      <div className="container">
        <AppBar color="secondary" position="relative">
          <h1 className="text-center">Text Generator App</h1>
        </AppBar>
        <Paper>
          <form className="form-inline shadow">
            <div className="form-group">
              <label className="mx-3">Paragraphs :</label>
              <Text value={this.state.paras} onChange={this.getParas} />
              <label className="mx-3">Include HTML :</label>
              <Select value={this.state.format} onChange={this.getFormat} />
            </div>
          </form>
        </Paper>
        <Paper>
          <Output value={this.state.text} />
        </Paper>
      </div>
    );
  }
}

export default App;
