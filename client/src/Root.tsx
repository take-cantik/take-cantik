import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error code={404} message="Page Not Found." />,
  },
]);

const Root = () => <RouterProvider router={router} />;

export default Root;
