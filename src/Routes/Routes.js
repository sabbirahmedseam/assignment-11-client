import { createBrowserRouter } from "react-router-dom";
import AddReview from "../AddReview/AddReview";
import AllCatg from "../AllCatg/AllCatg";
import Blog from "../Blog/Blog";
import BuyItm from "../BuyItm/BuyItm";
import ChangeReview from "../ChangeReview/ChangeReview";
import Details from "../Details/Details";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Registration from "../Registration/Registration";
import SeeReview from "../SeeReview/SeeReview";
import Summary from "../Summary/Summary";
import UpdateReview from "../UpdateReview/UpdateReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://mirpur-photography-server.vercel.app/items"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/allcatg",
        element: <AllCatg></AllCatg>,
        loader: () =>
          fetch("https://mirpur-photography-server.vercel.app/allcatg"),
      },
      {
        path: "/detail/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://mirpur-photography-server.vercel.app/detail/${params.id}`
          ),
      },
      {
        path: "/buy/:id",
        element: (
          <PrivateRoute>
            <BuyItm></BuyItm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://mirpur-photography-server.vercel.app/detail/${params.id}`
          ),
      },
      {
        path: "/review/:id",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://mirpur-photography-server.vercel.app/detail/${params.id}`
          ),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Registration></Registration> },
      {
        path: "/seereview/:id",
        element: <SeeReview></SeeReview>,
        loader: ({ params }) =>
          fetch(
            `https://mirpur-photography-server.vercel.app/orders/${params.id}`
          ),
      },
      { path: "/summary", element: <Summary></Summary> },
      { path: "/update", element: <UpdateReview></UpdateReview> },
      {
        path: "/change/:id",
        element: <ChangeReview></ChangeReview>,
        loader: ({ params }) =>
          fetch(
            `https://mirpur-photography-server.vercel.app/order/${params.id}`
          ),
      },
    ],
  },
]);
