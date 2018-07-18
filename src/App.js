import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import DialogContainer from './DialogContainer';

class App extends Component {
  state = {
    dialog_open: false,
    selected_option: ''
  }
  dialog_open = () => {
    this.setState({dialog_open: true});
  }
  dialog_close = () => {
    this.setState({dialog_open: false});
  }
  selected_option_update = (e) => {
    this.setState({selected_option: e.target.value});
  }
  save_handle = () => {
    console.log('will save form info');
    this.dialog_close();
  }
  render() {
    const options = [
      {
        rowguid: 'option_1',
        title: 'Option 1',
      }, {
        rowguid: 'option_2',
        title: 'Option 2',
      }, {
        rowguid: 'option_3',
        title: 'Option 3',
      }, {
        rowguid: 'option_4',
        title: 'Option 4',
      }
    ]
    return (
      <div className="App">
        <Button onClick={this.dialog_open}>Open Dialog</Button>
        <DialogContainer
          dialog_show={this.state.dialog_open}
          dialog_close={this.dialog_close}
          save={this.save_handle}
          selected_option={this.state.selected_option}
          selected_option_update={this.selected_option_update}
          options={options}
        />
      </div>
    );
  }
}

export default App;
