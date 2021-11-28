import HamburgerIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";

const HamburgerMenu = ({onClick}) => {
  return (
      <HamburgerIcon
        className='h-6 w-6 cursor-pointer md:hidden block'
        id='menu-button'
        onClick={onClick}
      />
  );
};

HamburgerMenu.propTypes = {
  onClick: PropTypes.func,
};

export default HamburgerMenu;
