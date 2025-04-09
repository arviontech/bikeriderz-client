import Blog from "@/components/Home/Blog";
import ChooseUs from "@/components/Home/ChooseUs";
import Contact from "@/components/Home/Contact";
import Featured from "@/components/Home/Featured";
import Gallary from "@/components/Home/Gallary";
import HeroSection from "@/components/Home/HeroSection";
import KnowUs from "@/components/Home/KnowUs";
import SpinWheel from "@/components/Home/SpinWheel/SpinWheel ";
import Testimonials from "@/components/Home/Testimonials";
import ScrollBottomToTop from "@/components/Shared/ScrollBottomToTop";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <KnowUs />
      <Featured />
      <ChooseUs />
      <SpinWheel />
      <Testimonials />
      <Gallary />
      <Contact />
      <Blog />
      <ScrollBottomToTop />
    </div>
  );
};

export default Home;
