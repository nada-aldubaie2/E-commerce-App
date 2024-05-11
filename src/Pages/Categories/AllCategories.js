import React from 'react';
import CategoryComponent from '../../Components/Categories/CategoryComponent';
import Pagination  from '../../Components/Utility/Pagination'
import Subtitle from '../../Components/Utility/Subtitle';

const AllCategories = () => {
  return (
    <div className='mx-2'>
     <Subtitle title="التصنيفات"/> 
     <CategoryComponent/> 
     <Pagination/> 
    </div>
  );
}


export default AllCategories;
