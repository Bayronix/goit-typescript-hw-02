import Modal from "react-modal";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
type ImageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  image: {
    urls: {
      regular: string;
    };
    alt_description?: string;
  } | null; // Allow image to be null if not provided
};

function ImageModal({ isOpen, onRequestClose, image }: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
    </Modal>
  );
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }),
};

export default ImageModal;
