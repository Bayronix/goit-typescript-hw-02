import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

type Article = {
  id: string;
  title: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
};

type ImageGalleryProps = {
  articles: Article[];
  openModal: (image: Article) => void;
};

export default function ImageGallery({
  articles,
  openModal,
}: ImageGalleryProps) {
  return (
    <ul className={styles.ul}>
      {articles.map((article) => (
        <ImageCard key={article.id} image={article} openModal={openModal} />
      ))}
    </ul>
  );
}
