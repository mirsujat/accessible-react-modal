import { render, cleanup, fireEvent} from '@testing-library/react'
import Modal from "./Modal"

afterAll(cleanup);
test("render Modal component", () =>{
    const handleClose = jest.fn();
    const props = { open: true, id: "dialog1"}
    const {getByTestId, getByText} = render(<Modal isOpen={true}  {...props} label="test modal" onClose={handleClose}></Modal>);
    // Assert
  expect(getByTestId('modal')).toBeInTheDocument();
  expect(getByTestId('cancel')).toBeInTheDocument();
  expect(getByText(/test modal/i)).toBeInTheDocument();

  // Act
  fireEvent.click(getByText(/cancel/i));

  // Assert
  expect(handleClose).toHaveBeenCalledTimes(1);
})