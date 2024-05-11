import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from "../../Assets/Images/nada.jpg"
import LeftBtn from "./LeftBtn";
import RightBtn from "./RightBtn";
const ProductGallery = () => {
  const images = [
    {
      original: `${mobile}`,
    },
    {
      original: `${mobile}`,
    },
    {
      original: `${mobile}`,
    },
  ];
  return (
    <div>
           <ImageGallery items={images} 
           defaultImage={mobile}
           showFullscreenButton={false}
           isRTL={true}
           showThumbnails={false}
           showPlayButton={false}
           renderLeftNav={LeftBtn}
           renderRightNav={RightBtn}
           />

    </div>
  );
}

export default ProductGallery;
