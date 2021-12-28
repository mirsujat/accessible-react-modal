import {render, cleanup } from '@testing-library/react';
import App from './App';

afterAll(() => cleanup);
test("render app component", () =>{
   
  const {getByTestId} = render(<App></App>);
  expect(getByTestId("app")).toBeInTheDocument();
})
