import Home from "~/pages/home";
import Error from "~/pages/error";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error code={404} message="Page Not Found." />,
  },
];
