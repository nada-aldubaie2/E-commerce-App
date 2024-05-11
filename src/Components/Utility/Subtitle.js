import { Link } from "react-router-dom";

const Subtitle = ({title, btnTitle, pathlink}) => {
  return (
    <div className='d-flex justify-between pt-4 pb-2 px-1'>
      <div className="text-slate-950 text-base sm:text-xl font-bold ">{title}</div>
      {btnTitle ?(
        <Link to={`${pathlink}`}>
        <div className="shopping-now p-1 sm:h-9 h-6 sm:w-24 md:text-s w-12 sm:text-xl text-xs text-slate-950 sm:border-solid sm:border-slate-950 rounded-xl text-center">{btnTitle}</div>
        </Link>
      ):null}
      
    </div>
  );
}

export default Subtitle;
