import PropTypes from "prop-types";

export default function ErrorMessage({ message }) {
  return (
    <div style={{ color: "red", textAlign: "center", margin: "20px 0" }}>
      {message}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
