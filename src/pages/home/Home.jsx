import BrandCategories from "../../components/BrandCategories";
import FAQSection from "../../components/FAQSection";
import UpcomingAuction from "../../components/UpcomingAuction";
import Hero from "./Hero";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="max-w-[1430px] mx-auto">
              <UpcomingAuction ></UpcomingAuction>
              <BrandCategories></BrandCategories>
            </div>
            
            
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;