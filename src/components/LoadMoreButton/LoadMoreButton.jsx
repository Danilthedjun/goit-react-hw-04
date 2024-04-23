import css from "./LoadMoreButton.module.css";
export default function LoadMoreButton({ onClick }) {
  return (
    <div className={css.centerButton}>
      <button className={css.loadmorebutton} onClick={onClick}>
        Load More
      </button>
    </div>
  );
}
