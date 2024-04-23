import css from "./ImageCard.module.css";
export default function ImageCard({ alt, img }) {
  return (
    <div>
      <img className={css.img} src={img} alt={alt} />
    </div>
  );
}
