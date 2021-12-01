import Minus from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";

const Terminal = () => {
  return (
    <div className='terminal-container mx-10 my-6 lg:mx-0 lg:max-w-screen-md'>
      <div className='term-handle flex justify-end p-2'>
        <Minus className='term-button mx-1' id='term-min' />
        <Add className='term-button mx-1' id='term-max' />
        <Close className='term-button mx-1 mr-2' id='term-close' />
      </div>
      <div className='terminal px-2 py-8 lg:py-12 flex justify-center font-bold lg:px-5'>
        <span className='path font-normal pr-2 md:pr-3 -mt-1 md:-mt-2'>~</span>
        <span className='prompt font-normal mt-2 px-3 pl-0 md:pr-5 lg:pr-8'>➜</span>
        <span className='term-text'>
            Welcome to Jeff Wang's Website
        </span>
      </div>
    </div>
  );
};

export default Terminal;
