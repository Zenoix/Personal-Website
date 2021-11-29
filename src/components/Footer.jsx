const Footer = () => {
  return (
    <footer className='w-full mt-8'>
      <div className='waves waves-small md:hidden'></div>
      <div className='hidden waves waves-reg md:block 3xl:hidden'></div>
      <div className='hidden waves waves-large 3xl:block'></div>
      <div className='footer-bar py-2 text-sm	 md:py-3 md:text-base'>
        <span>&copy;</span> Jeff Wang 2021
      </div>
    </footer>
  );
};

export default Footer;
