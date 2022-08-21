// TODO: Write a snapshot test and visually inspect it to insure that it is rendering correctly
import renderer from "react-test-renderer";
import Profile from "./Profile";

it("renders without crashing", () => {
  const rendered = renderer.create(
    <Profile name="marko" imgUrl="someimage.jpg" />
  );
  expect(rendered).toMatchSnapshot();
});
