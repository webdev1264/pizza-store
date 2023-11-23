import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";

import { setCurrentPage } from "../../redux/slices/filterSlice";
import styles from "./pagination.module.scss";

const Pagination = ({ currentPage }) => {
  const pageRange = 4;
  const pageCount = Math.ceil(10 / pageRange);

  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
        pageRangeDisplayed={pageRange}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={currentPage - 1}
      />
    </div>
  );
};

export default Pagination;
