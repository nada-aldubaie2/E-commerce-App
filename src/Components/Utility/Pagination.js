import ReactPaginate from 'react-paginate';
import '../HomePage.css';

const Pagination = () => {
  const handlePageClick =(data)=>{
    //getPages(data.selected+1)
  }
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="التالي >"
    onPageChange={handlePageClick}
    marginPagesDisplayed={1}
    pageRangeDisplayed={4}
    pageCount={100}
    previousLabel="< السابق"
    renderOnZeroPageCount={null}
    containerClassName={"pagination justify-content-center p-3"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    nextClassName={"page-item"}
    nextLinkClassName={"page-link"}
    previousClassName={"page-item"}
    previousLinkClassName={"page-link"}
    activeClassName={"active"}></ReactPaginate>
  );
}

export default Pagination;
