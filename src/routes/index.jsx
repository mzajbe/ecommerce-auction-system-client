import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
// import DemoAuctionPage from "../pages/auction/DemoAuctionPage";
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
import CompanyDashboard from "../pages/dashboard/company-dashboard/CompanyDashboard";
import UserLogin from "../pages/login/UserLogin";
import ComLogin from "../pages/login/ComLogin";
import Cart from "../pages/cart/Cart";
import PersonRegistration from "../pages/login/PersonRegistration";
import UserRegistration from "../pages/login/UserRegistration";
import LiveAuctionsPage from "../pages/auction/LiveAuctionPage";
import CompanySpecificAuctions from "../pages/auction/CompanySpecificAuctions";

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
                path:'/auctionDetails/:id',
                element:<AuctionDetails></AuctionDetails>,
            },
            {
                path:'/companyAuctions/:companyId',
                element:<CompanySpecificAuctions></CompanySpecificAuctions>,
            },
            {
                path:'/liveAuction',
                element:<LiveAuctionsPage></LiveAuctionsPage>,
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
                path:'/companyDashboard',
                element:<CompanyDashboard></CompanyDashboard>,
            },
            {
                path:'/user-login',
                element:<UserLogin></UserLogin>
            },
            {
                path:'/user-register',
                element:<UserRegistration></UserRegistration>
            },
            {
                path:'/company-login',
                element:<ComLogin></ComLogin>
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            },
        
    ]
  },
]);

export default router;
