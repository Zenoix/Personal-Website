import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ buttonName, page }) => {
  return (
    <div className='button px-8 py-2 bg-accent-pink text-center inline-block'>
      <NavLink className='font-semibold' to={`/${page}`}>
        {buttonName}
      </NavLink>
    </div>
  );
};

Button.defaultProps = {
  buttonName: "Unavailable",
  page: "404",
};

Button.propTypes = {
  page: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default Button;
