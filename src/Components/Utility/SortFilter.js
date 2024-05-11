import UnopDropdown from 'unop-react-dropdown';

const SearchFilter = ({title, sort}) => {
  const handler =()=>{
    
  }
  return (
    <div className="d-flex justify-between px-2 pt-3">
      <div className="text-xl text-stone-900 font-bold">{title}</div>
      <div className=" d-flex text-neutral-400 font-bold text-base text-right">
        <UnopDropdown
          onAppear={handler}
          onDiappear={handler}
          trigger={
            <p className="mx-1">
              <img src={sort} alt="sort" className="w-5 h-5 ms-1" />
              فرز حسب
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="bg-white p-4 w-44 shadow-md shadow-black rounded-lg">
            <div className="border-bottom text-xs font-normal p-2 hover:bg-slate-900 hover:text-white hover:transition-all">الاكثر مبيعاً</div>
            <div className="border-bottom  text-xs font-normal p-2 hover:bg-slate-900 hover:text-white hover:transition-all">الاعلى تقييماً</div>
            <div className="border-bottom  text-xs font-normal p-2 hover:bg-slate-900 hover:text-white hover:transition-all">
              السعر من الاعلى للأقل
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchFilter;
