import Minus from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";
import "../styles/Terminal.css"

const Terminal = () => {
  return (
    <div className='terminal-container filter drop-shadow-lg mx-6 my-6 sm:mx-12 sm:my-8 md:mx-16 lg:m-0 overflow-hidden z-2'>
      <div className='term-handle flex justify-end p-2'>
        <Minus className='term-button mx-1' id='term-min' />
        <Add className='term-button mx-1' id='term-max' />
        <Close className='term-button mx-1 mr-2' id='term-close' />
      </div>
      <div className='terminal flex flex-row p-6 xs:justify-center xs:py-16 sm:py-24 lg:px-18 lg:py-24 text-2xl xs:text-4xl sm:text-5xl md:text-6xl xl:leading-snug sm:tracking-tight lg:tracking-tighter'>
        <span className='overflow-hidden path relative -top-2 block'>
          ~
        </span>
        <span className='overflow-hidden reg-prompt relative -top-1 block px-3'>
          ➜
        </span>
        <span className='term-text overflow-hidden block'>
          Hi! I'm <span style={{ color: "#6be6e6" }}>Jeff</span>
        </span>
      </div>
    </div>
  );
};

export default Terminal;
