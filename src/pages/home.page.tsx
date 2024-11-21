import MobileSearch from "../components/mobileSearch.component";
import Carousel from "../components/carousel.component";
import FeaturedEvents from "../components/featuredEvents.component";
import UpcomingEvents from "../components/upcomingEvents.component";
import About from "../components/about.component";
import CtaSection from "../components/cta.component";

function Home() {
  return (
    <>
      <MobileSearch />
      <Carousel />
      <FeaturedEvents />
      <UpcomingEvents />
      <About />
      <CtaSection />
    </>
  );
}

export default Home;
