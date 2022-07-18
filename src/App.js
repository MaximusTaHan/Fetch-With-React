import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogImage: 'temp'
    };

    this.getDog = this.getDog.bind(this);
  }

  getDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => this.setState({ dogImage: data.message}))
  }

  componentDidMount() {
    this.getDog();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello from Dog!</h1>
        <img src={this.state.dogImage} alt="Dog image"/>
        <button onClick={this.getDog}>
          Give me Another!
        </button>
      </div>
    );
  }
}

export default App;
