import PropTypes from "prop-types";
import Styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={Styles.div}>
      <button type="button" onClick={onClick}>
        Load More
      </button>
    </div>
  );
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
