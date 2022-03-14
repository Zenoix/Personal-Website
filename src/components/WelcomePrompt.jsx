import "../styles/WelcomePrompt.css";
import "../styles/App.css";
import Button from "./Button";
import { useState } from "react";

const WelcomePrompt = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
      <div className='welcome-prompt-container h-screen w-screen absolute z-50 flex justify-center items-center'>
        <div className="welcome-prompt text-center p-5 flex-col justify-center max-w-lg rounded-lg">
            <p className="pt-2 text-lg">Welcome to My Website!</p>
            <p className="py-2">Just to let you know, this site is still in early development and will probably have bugs/issues. To report an issue, please contact me through the discord at "wang#5465". Alternatively, you can create an issue or pull request on the site's Github repo which can be found <a href="https://github.com/Zenoix/Personal-Website" style={{ color: "lightblue", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">here.</a></p>
            <a className='button px-8 py-2 md:py-3 lg:py-2 lg:px-6 bg-accent-pink text-center inline-block my-4 font-semibold button-text text-base sm:text-lg' onClick={closeModal}>I understand</a>
        </div>
      </div>
  );
};

export default WelcomePrompt;
