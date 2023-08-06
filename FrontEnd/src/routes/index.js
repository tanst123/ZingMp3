import config from "../configs/config";

// Componet page
import CharPageView from "../pages/CharPage/view/CharPageView";
import HomePageView from "../pages/HomePage/view/HomePageView";
import NotFoundView from "../pages/NotFound/view/NotFoundView";

const publicRoute = [
  { path: config.routes.home, component: HomePageView },
  { path: config.routes.char, component: CharPageView },
  { path: "*", component: NotFoundView },
];

const privateRoute = [];

export { privateRoute, publicRoute };
