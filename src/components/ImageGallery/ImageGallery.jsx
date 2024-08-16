import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ articles, openModal }) {
  return (
    <ul className={styles.ul}>
      {articles.map((article) => (
        <ImageCard key={article.id} image={article} openModal={openModal} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};
