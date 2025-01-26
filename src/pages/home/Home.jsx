import BrandCategories from "../../components/BrandCategories";
import CarShowcase from "../../components/CarShowcase";
import FAQSection from "../../components/FAQSection";
import FeaturedAuctions from "../../components/FeaturedAuctions";
import UpcomingAuction from "../../components/UpcomingAuction";
import Hero from "./Hero";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="max-w-[1430px] mx-auto">
              <UpcomingAuction ></UpcomingAuction>
              {/* <BrandCategories></BrandCategories> */}
              <FeaturedAuctions></FeaturedAuctions>
              <CarShowcase></CarShowcase>
            </div>
            
            
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;