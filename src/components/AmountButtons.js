import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className="grid w-[140px] justify-center grid-cols-3 items-center ">
      <button
        type="button"
        className="pointer py-0 px-0 w-4 h-4 flex items-center justify-center"
        onClick={decrease}
      >
        <AiOutlineMinus />
      </button>
      <h2 className="mb-0">{amount}</h2>
      <button
        type="button"
        className="pointer py-4 px-0 w-8 h-4 flex items-center justify-center"
        onClick={increase}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};
export default AmountButtons;
