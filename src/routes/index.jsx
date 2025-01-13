import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import DemoAuctionPage from "../pages/auction/DemoAuctionPage";
import MainLayout from "../layout/MainLayout";
// import Products from "../pages/products/Products";
import DemoProduct from "../components/DemoProduct";
import AuctionForm from "../pages/auction/AuctionForm";
import CompanyAuctionPage from "../pages/auction/CompanyAuctionPage";
// import AuctionDetails from "../pages/auction/AuctionDetails";
import AuctionPage from "../pages/auction/AuctionPage";
import AuctionDetails from "../pages/auction/AuctionDetails";
import ComRegistration from "../pages/login/ComRegistration";
import PersonRegistration from "../pages/login/PersonRegistration";
import UserLogin from "../pages/login/UserLogin";
import ComLogin from "../pages/login/ComLogin";
import ComProfile from "../pages/company/ComProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        
            {
                index:true,
                element:<Home></Home>,
            },
            {
                path:'/auctions',
                element:<CompanyAuctionPage></CompanyAuctionPage>,
                // <DemoAuctionPage></DemoAuctionPage>
            },
            {
                path:'/products',
                element:<DemoProduct></DemoProduct>,
            },
            {
                path:'/demo',
                element:<AuctionDetails></AuctionDetails>,
            },
            {
                path:'/createAuction',
                element:<AuctionForm></AuctionForm>,
            },
            {
                path:'/auctionPage',
                element:<AuctionPage></AuctionPage>,
            },
            {
                path:'/auctionDetails',
                element:<AuctionDetails></AuctionDetails>,
            },
            {
                path:'/comRegistration',
                element:<ComRegistration></ComRegistration>,
            },
            {
                path:'/personRegistration',
                element:<PersonRegistration></PersonRegistration>,
            },
            {
                path:'/userLogin',
                element:<UserLogin></UserLogin>,
            },
            {
                path:'/comLogin',
                element:<ComLogin></ComLogin>,
            },
            {
                path:'/comProfile',
                element:<ComProfile></ComProfile>,
            },

        
    ]
  },
]);

export default router;
