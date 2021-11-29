import Terminal from "./Terminal";
import LandingCards from "./LandingCards";

const Home = () => {
  const aboutContent =
    "I'm about to become a second-year student at the Univesity of Auckland majoring in Data Science. My interests include (but are not limited to) programming, data science, and machine learning. If you're interested in learning more about me as a person, click the button below.";

  const projectContent = "My latest project is actually this website made with Reactjs and Tailwindcss. The Github repo and other project's I've made can be found by clicking the button below."

  const contactsContent =
    "I am available to be contacted on a wide range of platforms and for internships or job opportunities. You can find all my contact information and CV by clicking on the 'Contacts' button below.";

  return (
    <main className='flex flex-col justify-center lg:grid lg:grid-cols-12 lg:mx-14 lg:gap-x-10 lg:mt-4 lg:relative'>
      {/*TODO Tablet and Desktop Displays*/}
      <div className="home-terminal-container lg:col-start-1 lg:col-span-6"><Terminal /></div>
      
      <section className='mx-12 lg:mx-0 lg:my-0 lg:col-start-7 lg:col-span-6'>
        <LandingCards
          heading="Hi!, I'm Jeff"
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
  );
};

export default Home;
