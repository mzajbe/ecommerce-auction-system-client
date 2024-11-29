import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import DemoAuctionPage from "../pages/auction/DemoAuctionPage";
import MainLayout from "../layout/MainLayout";
import Products from "../pages/products/Products";

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
                element:<Products></Products>,
            },
        
    ]
  },
]);

export default router;
