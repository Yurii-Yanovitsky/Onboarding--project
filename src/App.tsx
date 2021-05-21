import { Component } from 'react';
import './App.css';
import Calc from './components/Calc';

export default class App extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Calc />
      </div>
    )
  }
}