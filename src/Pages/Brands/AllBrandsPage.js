import React from 'react';
import { Pagination } from 'react-bootstrap';
import Subtitle from '../../Components/Utility/Subtitle';
import BrandComponent from '../../Components/Brand/BrandComponent';

const AllBrandsPage = () => {
  return (
    <div className='mx-2'>
     <Subtitle title="كل الماركات"/> 
     <BrandComponent/> 
     <Pagination/> 
    </div>
  );
}

export default AllBrandsPage;
