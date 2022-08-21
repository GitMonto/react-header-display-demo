import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Button from "./Button";

it("renders without crashing", () => {
  const rendered = renderer.create(
    <Button changeHandler={() => {}} txt="Click Me!" />
  );
  expect(rendered).toMatchSnapshot();
});
it("calls the changeHandler whenever the button is clicked", () => {
  const mockChangeHandler = jest.fn();
  render(<Button changeHandler={mockChangeHandler} />);

  userEvent.click(screen.getBtRole("button"));
  expect(mockChangeHandler).toHaveBeenCalled();
});

// NEEDS CHANGE
