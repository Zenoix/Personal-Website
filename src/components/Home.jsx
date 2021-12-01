import Terminal from "./Terminal";
import LandingCards from "./LandingCards";

const Home = () => {
  const aboutContent =
    "I'm about to become a second-year student at the Univesity of Auckland majoring in Data Science. My interests include (but are not limited to) programming, data science, and machine learning. If you're interested in learning more about me as a person, click the button below.";

  const projectContent =
    "My latest project is actually this website made with Reactjs and Tailwindcss. The Github repo for this site and other projects I've done can be found by clicking the button below.";

  const contactsContent =
    "I am available to be contacted on a wide range of platforms and for internships or job opportunities. You can find all my contact information and CV by clicking on the 'Contacts' button below.";

  return (
    <div className='home-main-div flex lg:justify-center'>
      <main className='flex flex-col lg:max-w-screen-lg xl:max-w-screen-xl 2xl:xl:max-w-screen-2xl'>
        <Terminal />
        <section className='mx-12'>
          <LandingCards
            heading="A Bit About Me"
            content={aboutContent}
            buttonName='About Me'
            page='About'
          />
          <LandingCards
            heading='My Latest Project'
            content={projectContent}
            buttonName='More Projects'
            page='Projects'
          />
          <LandingCards
            heading='How to Contact Me'
            content={contactsContent}
            buttonName='Contact Me'
            page='Contacts'
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
