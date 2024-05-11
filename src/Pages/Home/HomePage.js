import Slider from '../../Components/Home/Slider';
import HomeCategories from '../../Components/Home/HomeCategories';
import ProductCardComponent from '../../Components/Products/ProductCardComponent';
import DiscountSection from '../../Components/Home/DiscountSection';
import BrandFeatures from '../../Components/Brand/BrandFeatures';

const HomePage = () => {
  return (
<div>
    <Slider/>
    <HomeCategories/>
    <ProductCardComponent title={"الاكثر مبيعا"} btnTitle={"المزيد"} pathlink={'/products'}/>
    <DiscountSection/>
    <ProductCardComponent title={"احدث الازياء"} btnTitle={"المزيد"}  pathlink={'/products'}/>
    <BrandFeatures title={"اشهر الماركات"} btnTitle={"المزيد"} />
</div>
  );
}

export default HomePage;
