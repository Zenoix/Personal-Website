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
      <div className='terminal flex flex-row text-2xl p-6 sm:justify-center'>
        <span className='hidden path px-2 mx-1 block'>~</span>
        <span className='hidden reg-prompt px-2 mx-1 block'>➜</span>
        <span className='prompt pr-2'>
          &gt;
        </span>
        <span className='term-text inline-block'>
          Hi! I'm <span style={{ color: "#6be6e6" }}>Jeff</span>
        </span>
      </div>
    </div>
  );
};

export default Terminal;
