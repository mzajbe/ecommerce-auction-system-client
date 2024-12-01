import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import DemoAuctionPage from "../pages/auction/DemoAuctionPage";
import MainLayout from "../layout/MainLayout";
// import Products from "../pages/products/Products";
import DemoProduct from "../components/DemoProduct";

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
                element:<DemoAuctionPage></DemoAuctionPage>,
            },
            {
                path:'/products',
                element:<DemoProduct></DemoProduct>,
            },
            // {
            //     path:'/demo',
            //     element:<DemoProduct></DemoProduct>,
            // },
        
    ]
  },
]);

export default router;
