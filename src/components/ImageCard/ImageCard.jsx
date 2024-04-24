import css from "./ImageCard.module.css";
export default function ImageCard({ image, onImageClick }) {
  return (
    <div>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.description}
        onClick={() => onImageClick(image.urls.regular)}
      />
    </div>
  );
}
