
import './App.css';
import { Button } from "react-bootstrap"
import React, { Component } from 'react'
import Profile from './profile/Profile';


class App extends React.Component {

  state = {
    show: false,
    seconde: 0,
  };
  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ seconde: this.state.seconde + 1 });
    }, 1000);


  }


  render() {

    return (
      <div >
        <h1 className="seconde">{this.state.seconde}</h1>
        <Button className="button" variant="light" onClick={this.handleShow}  >show</Button>
        {this.state.show && <Profile />}

      </div >
    )
  }
}
export default App
