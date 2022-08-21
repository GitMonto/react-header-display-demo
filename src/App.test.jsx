import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import App from "./App";

it("renders without crashing", () => {
  const rendered = renderer.create(<App />);
  expect(rendered).toMatchSnapshot();
});

it("Get by label text and submit the form", () => {
  const nameInput = "john doe";

  render(<App />);
  const h1 = screen.getByRole("heading", { level: 1 });
  const input = screen.getByLabelText(/name/i);
  const submitBtn = screen.getByRole("button", { name: /submit/i });

  userEvent.type(input, nameInput);
  userEvent.click(submitBtn);

  screen.getByAltText(nameInput);

  expect(h1.textContent).toContain(nameInput);
});
