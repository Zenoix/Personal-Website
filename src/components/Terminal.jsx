import Minus from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";

const Terminal = () => {
  return (
    <div className="terminal-container">
      <div className="term-handle flex justify-end">
        <div className="term-buttons">
          <Minus/>
          <Add/>
          <Close id="term-close"/>
        </div>
      </div>
      <div className="terminal"></div>
    </div>
  );
};

export default Terminal;
