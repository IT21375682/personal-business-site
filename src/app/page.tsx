// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OnlineCourse from "./online-course";
import WhyChooseUs from "./why-choose-us";
import CarouselFeatures from "./carousel-features";
import Pricing from "./pricing";
import OtherCourses from "./other-courses";
import Partners from "./partner";
import Service from "./services";
import Overview from "./OverviewSection"
import Testomonial from "./Testamonial"
import ContactUs from "./contactUs"
import InsightsPage from "./insights";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OnlineCourse />
      <WhyChooseUs />
      <Partners />
      <Service />
      <Overview />
      <InsightsPage/>
      <Testomonial/>
      <ContactUs/>
      {/* <CarouselFeatures />
      <Pricing />
      <OtherCourses />
     */}
      <Footer /> 
    </>
  );
}
