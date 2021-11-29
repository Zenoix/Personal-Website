import PropTypes from "prop-types";
import Button from "./Button";

const LandingCards = ({ heading, content, buttonName, page }) => {
  return (
    <div className='landing-card flex flex-col mb-8 lg:mb-4'>
      <h2 className='landing-heading text-xl lg:text-base mb-1'>{heading}</h2>
      <hr className='sep' />
      <p className='my-4 lg:my-2 mb-2 leading-6 lg:leading-5'>{content}</p>
      <div className="md:flex md:justify-center"><Button buttonName={buttonName} page={page} /></div>
    </div>
  );
};

LandingCards.defaultProps = {
  heading: "Unavailable",
  content: "The content for this section is currently unavailable.",
  page: "404",
};

LandingCards.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default LandingCards;
