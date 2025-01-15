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
import ContactForm from "../pages/contactUs/ContactForm";

import Demo from "../pages/Demo";
import AboutUs from "../pages/aboutUs/AboutUs";
import Blog from "../pages/blog/Blog";
import BlogDetailPage from "../pages/blog/BlogDetailPage";
import UserLogin from "../pages/login/UserLogin";
import ComLogin from "../pages/login/ComLogin";
import PersonRegistration from "../pages/login/PersonRegistration";
import ComRegistration from "../pages/login/ComRegistration";


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
                element:<Demo></Demo>,
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
                path:'/contact',
                element:<ContactForm></ContactForm>,
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>,
            },
            {
                path:'/blogs',
                element:<Blog></Blog>,
            },
            {
                path:'/blog-details',
                element:<BlogDetailPage></BlogDetailPage>,
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
                path:'/personRegistration',
                element:<PersonRegistration></PersonRegistration>,
            },
            {
                path:'/comRegistration',
                element:<ComRegistration></ComRegistration>,
            },

        
    ]
  },
]);

export default router;
