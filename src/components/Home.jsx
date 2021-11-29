import Terminal from "./Terminal";
import LandingCards from "./LandingCards";

const Home = () => {
  const aboutContent =
    "I'm about to become a second-year student at the Univesity of Auckland majoring in Data Science. My interests include (but are not limited to) programming, data science, and machine learning. If you're interested in learning more about me as a person, click the button below.";

  const contactsContent = "I am available to be contacted on a wide range of platforms and for internships or job opportunities. You can find all my contact information and CV by clicking on the 'Contacts' button below."

  return (
    <main className='flex flex-col justify-center md:grid md:grid-cols-12 md:mx-14 md:gap-x-5 lg:mx-52'>
      <Terminal />
      <section className='mx-12'>
        <LandingCards
          heading="Hi!, I'm Jeff"
          content={aboutContent}
          buttonName="About Me"
          page='About'
        />
        <LandingCards heading='My Latest Project' 
        buttonName="More Projects" page='Projects' />
        <LandingCards heading='How to Contact Me' content={contactsContent} buttonName="Contact Me" page='Contacts' />
      </section>
    </main>
  );
};

export default Home;
