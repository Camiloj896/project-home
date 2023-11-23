import { createBrowserRouter } from "react-router-dom";

import Home from './pages/home';
import Authorization from './pages/authorization';
import Contact from './pages/contact'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/authorization",
    element: <Authorization />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default routes;