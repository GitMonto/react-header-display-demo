// Test this component with dummy/mock data
import renderer from "react-test-renderer";
import Products from "./Products";

const products = [
  {
    price: "$49.99",
    name: "Test 1",
  },
  {
    price: "$9.99",
    name: "Test 2",
  },
  {
    price: "$29.99",
    name: "Test 3",
  },
];

// TODO: Write a snapshot test and visually inspect it to insure that it is rendering correctly
it("renders without crashing", () => {
  const rendered = renderer.create(<Products products={products} />);
  expect(rendered).toMatchSnapshot();
});
