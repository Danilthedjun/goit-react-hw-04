import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.centerButton}>
      <button className={css.loadmorebutton} onClick={onClick}>
        Load More
      </button>
    </div>
  );
}
