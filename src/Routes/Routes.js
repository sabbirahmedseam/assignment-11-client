import { createBrowserRouter } from "react-router-dom";
import AllCatg from "../AllCatg/AllCatg";
import Blog from "../Blog/Blog";
import Details from "../Details/Details";
import Home from "../Home/Home";
import Main from "../Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/items"),
      },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/allcatg",
        element: <AllCatg></AllCatg>,
        loader: () => fetch("http://localhost:5000/allcatg"),
      },
      {
        path: "/detail/:id",
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
    ],
  },
]);
