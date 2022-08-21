import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";

const products = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const choices = ["Rock", "Paper", "Scissors"];

const imgUrl = "https://i.imgur.com/yXOvdOSs.jpg";

function App() {
  const [inputName, setInputName] = useState("Anonymous");

  return (
    <>
      <h1 className="pb-7 text-center text-3xl">Hello {inputName}</h1>
      <Form setName={setInputName} />
      {inputName !== "Anonymous" && <Profile name={inputName} image={imgUrl} />}
      {/* <Products products={products} /> */}
      <Button choices={choices} />
    </>
  );
}

export default App;

// NEEDS CHANGE
