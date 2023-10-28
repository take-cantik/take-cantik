import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "~/pages/Home";
import Error from "~/pages/Error";

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
