import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";

import { setCurrentPage } from "../../redux/slices/filterSlice";
import styles from "./pagination.module.scss";

const Pagination = () => {
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
      />
    </div>
  );
};

export default Pagination;
