import PropTypes from "prop-types";
type ErrorMessageProp = {
  message: string;
};
export default function ErrorMessage({ message }: ErrorMessageProp) {
  return (
    <div style={{ color: "red", textAlign: "center", margin: "20px 0" }}>
      {message}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
