import React from 'react';
import './App.css';
import Title from './containers/Title';
import Card from './containers/Card';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: '',
      speakBox: ''
    };
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    alert(`You asked kitty to speak: ${this.state.input}`);

    event.preventDefault();
    this.setState({ speakBox: this.state.input })
  }

  render() {
    return (
    <div className='App'>
      <Title />
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input 
          className="_pa3 ba bg-lightest-purple"
          type="text"
          value={this.state.input}
          placeholder='Meow?'
          onChange={this.handleChange.bind(this)}
        />
        <input
          type="submit"
          value="Meow"
        />
      </form>
      <Card speakBox={this.state.speakBox} />
    </div>
    )
  }
}

export default App;
