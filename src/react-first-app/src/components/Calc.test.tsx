import { fireEvent, render, act } from '@testing-library/react';
import Calc, { add, divide } from './Calc';
import { Constants } from '../helpers/constants';

describe('add function', () => {
  it('should return an add result', () => {

    let [a, b, expected] = [5, 5, 10];
    const result = add(a, b);

    expect(result).toEqual(expected);
  })
})

describe('divide function', () => {
  describe('when divided by an integer different from 0', () => {
    it('should return a divide result', () => {

      let [a, b, expected] = [10, 2, 5];
      const result = divide(a, b);

      expect(result).toEqual(expected);
    })
  })

  describe('when trying to divide by 0', () => {
    it('should throw an error', () => {

      const [a, b] = [10, 0];
      const expectedError = new Error(Constants.divideError);

      expect(() => divide(a, b)).toThrow(expectedError);
    })
  })
})

describe('add result', () => {
  it('should contain an add result', () => {
    const {queryByTestId } = render(<Calc />)

    const inputA = queryByTestId("inputA") as HTMLInputElement;
    const inputB = queryByTestId("inputB") as HTMLInputElement;
    const button = queryByTestId("add") as HTMLButtonElement;
    const output = queryByTestId("output") as HTMLDivElement;

    let [a, b, expected] = ['10', '20', '30']

    act(() => {
      inputA!.value = a;
      inputB!.value = b;

      if (button) fireEvent.click(button);
    })

    expect(output?.innerHTML).toEqual(expected);
  })
})