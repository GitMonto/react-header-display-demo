import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Form from "./Form";

it("renderers without crashing", () => {
  const rendered = renderer.create(<Form setName={() => {}} />).toJSON;
  expect(rendered).toMatchSnapshot();
});

it("calls the submit handler when the form is submitted", () => {
  const handleSubmit = jest.fn();
  render(<Form setName={handleSubmit} />);
  const submitBtn = screen.getByRole("button", { name: /submit/i });

  userEvent.click(submitBtn);

  expect(handleSubmit).toHaveBeenCalled();
});

/**
 * TODO:
 * 1. Write a snapshot test for Form component.
 * 2. Write a test for the Form component's lled whenever the form is submitted.handleSubmit function. Use a mock fxn. and confirm that the setName function is ca
 * HINT: `userEvent.click` to trigger a form submission.
 * HINT: You will only submit the form once, so only check that the mock function is called once.
 */
