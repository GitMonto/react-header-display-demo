import PropTypes from "prop-types";

export default function Profile({ name, image }) {
  return (
    <section className="mx-auto flex w-48 flex-col items-center pt-11">
      <h1>Photo of {name}</h1>
      <img className="rounded-full" src={image} alt={name} />
    </section>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
