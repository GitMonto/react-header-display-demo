import PropTypes from "prop-types";

export default function Button({ changeHandler }) {
  return changeHandler.map((choice) => (
    <div className="flex">
      <h2>Display</h2>
      <button
        type="button"
        className="mx-auto mt-4 flex  w-48 flex-col items-center "
      >
        {choice}
      </button>
    </div>
  ));
}

Button.propTypes = {
  changeHandler: PropTypes.string.isRequired,
};

// NEEDS CHANGE U LAZY SHIT
