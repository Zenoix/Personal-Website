import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ buttonName, page }) => {
  return (
    <div className='button px-8 py-2 md:py-3 lg:py-2 lg:px-6 bg-accent-pink text-center inline-block'>
      <NavLink className='font-semibold' to={`/${page}`}>
        <span className="button-text text-base sm:text-lg">{buttonName}</span>
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
