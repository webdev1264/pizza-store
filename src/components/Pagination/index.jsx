import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";

const Pagination = ({ pageChange, pageRange, pageCount }) => {
  return (
    <div className={styles.root}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => pageChange(e.selected + 1)}
        pageRangeDisplayed={pageRange}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
