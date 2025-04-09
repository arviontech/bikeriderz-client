import App from "@/App";
import DashboardLayout from "@/components/Layout/DashboardLayout/DashboardLayout";
import ProtectedRoute from "@/components/Shared/ProtectedRoute";
import AboutUs from "@/pages/AboutUS/AboutUs";
import BikeLists from "@/pages/BikeLists/BikeLists";
import Blog from "@/pages/Blog/Blog";
import Checkout from "@/pages/CheckOut/Checkout";
import AdminDashboard from "@/pages/Dashboard/Admin/AdminDashboard";
import AdminProfile from "@/pages/Dashboard/Admin/AdminProfile";
import ManageBikes from "@/pages/Dashboard/Admin/ManageBikes/ManageBikes";
import ReturnBike from "@/pages/Dashboard/Admin/ReturnBike/ReturnBike";
import MyRentals from "@/pages/Dashboard/User/MyRentals";
import UserProfile from "@/pages/Dashboard/User/UserProfile";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import Home from "@/pages/Home/Home";
import SingleProduct from "@/pages/SingleProductPage/SingleProduct";
import Login from "@/pages/User Authentication/Login/Login";
import Signup from "@/pages/User Authentication/SignUp/Signup";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  //here children is reltaive path that's why / slash is not used before path name
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "bike",
        element: <BikeLists />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },

      {
        path: "singleProduct/:id",
        element: (
          <ProtectedRoute>
            <SingleProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    path: "/user-dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <UserProfile />,
      },
      {
        path: "my-rentals",
        element: <MyRentals />,
      },
    ],
  },

  {
    path: "/admin-dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "admin-profile",
        element: <AdminProfile />,
      },
      {
        path: "manage-bikes",
        element: <ManageBikes />,
      },
      {
        path: "return-bike",
        element: <ReturnBike />,
      },
    ],
  },
  //these are absoulte path
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
