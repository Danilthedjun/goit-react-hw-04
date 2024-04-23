import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li
          className={css.galleryItem}
          key={image.id}
          onClick={() => onImageClick(image.urls.regular)}
        >
          <ImageCard alt={image.description} img={image.urls.small} />
        </li>
      ))}
    </ul>
  );
}
