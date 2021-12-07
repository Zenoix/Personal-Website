import PropTypes from "prop-types";
import Button from "./Button";

const LandingCards = ({ heading, content, buttonName, page }) => {
  return (
    <div className='landing-card flex flex-col mb-8 lg:mb-4'>
      <h2 className='landing-heading text-base xs:text-lg sm:text-xl mb-1'>
        {heading}
      </h2>
      <div className='sep w-16' />
      <p className='my-4 mb-2 text-sm leading-5 sm:text-base sm:leading-6'>
        {content}
      </p>
      <div className='sm:mt-4 sm:flex sm:justify-center lg:m-0'>
        <Button buttonName={buttonName} page={page} />
      </div>
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
