import "../styles/WelcomePrompt.css";
import Button from "./Button";

const WelcomePrompt = () => {
  return (
      <div className='welcome-prompt-container h-full w-full absolute z-50'>
        <div className="welcome-prompt text-center">
            <h1>Welcome to My Website!</h1>
            <p>Just to let you know, this site is still in early development and may have bugs/issues. To report an issue, please contact me through the "Contact Me" page. Alternatively, you can create an issue or pull request on the site's Github repo which can be found in the footer or "Projects" page.</p>
            <Button buttonName="I understand" page="" />
        </div>
      </div>
  );
};

export default WelcomePrompt;
