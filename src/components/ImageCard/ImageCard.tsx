import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageCard.module.css";

type Article = {
  src: string;
  alt: string;

  urls: {
    small: string;
  };
  alt_description?: string;
};

type imageCardProp = {
  openModal: (image: Article) => void;
  image: Article;
};

function ImageCard({ image, openModal }: imageCardProp) {
  return (
    <li className={styles.li}>
      <img
        src={image.urls.small}
        className={styles.img}
        alt={image.alt_description}
        onClick={() => openModal(image)}
      />
    </li>
  );
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageCard;
