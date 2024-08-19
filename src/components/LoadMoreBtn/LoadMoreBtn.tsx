import Styles from "./LoadMoreBtn.module.css";

type LoadMore = {
  onClick: () => void;
};
export default function LoadMoreBtn({ onClick }: LoadMore) {
  return (
    <div className={Styles.div}>
      <button type="button" onClick={onClick}>
        Load More
      </button>
    </div>
  );
}
