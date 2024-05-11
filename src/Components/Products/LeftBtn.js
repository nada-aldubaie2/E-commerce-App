import next from '../../Assets/Images/next.png';

const LeftBtn = (onClick, onDisable) => {
  return (
    <img
    src={next}
    alt='next'
    width="35px"
    height="35px"
    onClick={onClick}
    onDisable={onDisable}
    className='float-left mt-56 cursor-pointer'
    />
      
  );
}

export default LeftBtn;
