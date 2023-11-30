import { createBrowserRouter } from "react-router-dom";

import Home from './pages/home';
import Authorization from './pages/authorization';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/authorization",
    element: <Authorization />,
  },
]);

export default routes;