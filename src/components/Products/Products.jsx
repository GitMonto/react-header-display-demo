import PropTypes from "prop-types";

function createProductLIs(productsData) {
  return productsData.map((product) => (
    <li
      key={product.name}
      className="mx-auto flex w-48 flex-col items-center pt-11"
    >
      {product.name} - {product.price}
    </li>
  ));
}

export default function Products({ products }) {
  return <ul>{createProductLIs(products)}</ul>;
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};
