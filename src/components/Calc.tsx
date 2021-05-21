import { Component } from 'react';
import Button from './Button';
import Input from './Input';
import Output from './Output';
import { Constants } from '../helpers/constants';

class Calc extends Component {
  render() {
    return (
      <div>
        <Input id="inputB" testid="inputB" lable="a" />
        <Input id="inputA" testid="inputA" lable="b" />
        <Button id="add" testid="add" onClick={this.handleClick}>add</Button>
        <Output id="output" testid="output" />
      </div >
    )
  }

  handleClick = () => {
    const inputA = document.querySelector<HTMLInputElement>('#inputA');
    const inputB = document.querySelector<HTMLInputElement>('#inputB');

    const a = inputA!.valueAsNumber;
    const b = inputB!.valueAsNumber;

    const result: number = add(a, b);
    const output = document.getElementById('output');
    if (output) {
      output.innerHTML = `${result}`;
    }
  }
}

export function add(a: number, b: number): number {
  return a + b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error(Constants.divideError);
  }
  return a / b;
}

export default Calc;
