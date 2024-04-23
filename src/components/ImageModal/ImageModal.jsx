import { useEffect } from "react";
import ReactModal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    background: "none",
    padding: "0",
    maxWidth: "1080px",
    maxHeight: "720px",
    overflow: "hidden",
  },
};

ReactModal.setAppElement("#root");
function ImageModal({ imageUrl, isOpen, onClose }) {
  const handleCloseModal = () => {
    onClose();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel="Image Modal"
      onKeyDown={handleKeyDown}
      onClick={handleClickOutside}
    >
      <img src={imageUrl} alt="" />
    </ReactModal>
  );
}

export default ImageModal;
