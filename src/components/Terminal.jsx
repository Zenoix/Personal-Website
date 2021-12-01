import Minus from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";

const Terminal = () => {
  return (
    <div className='terminal-container mx-10 my-6'>
      <div className='term-handle flex justify-end p-2'>
        <Minus className='term-button mx-1' id='term-min' />
        <Add className='term-button mx-1' id='term-max' />
        <Close className='term-button mx-1 mr-2' id='term-close' />
      </div>
      <div className='terminal px-2 py-8 flex justify-center font-bold'>
        <span className='path font-normal'>~</span>
        <span className='prompt font-normal'>➜</span>
        <span className='term-text'>Welcome to Jeff Wang's Website</span>
      </div>
    </div>
  );
};

export default Terminal;
