import previos from '../../Assets/Images/prev.png';

const RightBtn = ({onClick, onDisable}) => {
  return (
    <img
    src={previos}
    alt='previos'
    width="35px"
    height="35px"
    onClick={onClick}
    onDisable={onDisable}
    className='float-right mt-56 cursor-pointer'
    />
      
  );
}

export default RightBtn;
