import PropTypes from "prop-types";
import Button from "./Button";

const LandingCards = ({ heading, content, buttonName, page }) => {
  return (
    <div className='landing-card flex flex-col mt-6 mb-8'>
      <h2 className='landing-heading text-xl mb-1'>{heading}</h2>
      <hr className='sep' />
      <p className='my-4 leading-6'>{content}</p>
      <Button buttonName={buttonName} page={page} />
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
