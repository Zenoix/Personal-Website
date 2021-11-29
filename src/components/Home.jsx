import Terminal from "./Terminal";
import LandingCards from "./LandingCards";

const Home = () => {
  const aboutContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, veritatis inventore voluptatem consectetur quibusdam velit vitae tempore eveniet perspiciatis corrupti veniam tempora molestias officiis aperiam voluptas quasi a ad culpa!"
  return (
    <main className='flex flex-col justify-center md:grid md:grid-cols-12 md:mx-14 md:gap-x-5 lg:mx-52'>
      <Terminal />
      <section className="mx-12">
        <LandingCards heading="Hi!, I'm Jeff" content={aboutContent} page="About"/>
        <LandingCards heading="My Latest Project" page="Projects"/>
        <LandingCards heading="How to Contact Me" page="Contacts"/>
      </section>
    </main>
  );
};

export default Home;
