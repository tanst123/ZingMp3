import config from "../configs/config";
import CharNewPageView from "../pages/CharNewPage/view/CharNewPageView";

// Componet page
import CharPageView from "../pages/CharPage/view/CharPageView";
import HomePageView from "../pages/HomePage/view/HomePageView";
import LibraryPageView from "../pages/LibraryPage/view/LibraryPageView";
import NotFoundView from "../pages/NotFound/view/NotFoundView";
import RadioPageView from "../pages/RadioPage/view/RadioPageView";
import Top100PageView from "../pages/Top100Page/view/Top100PageView";
import TopicPageView from "../pages/TopicPage/view/CharPageView";

const publicRoute = [
  { path: "/", component: HomePageView },
  { path: "/char", component: CharPageView },
  { path: "/radio", component: RadioPageView },
  { path: "/library", component: LibraryPageView },
  { path: "/charnew", component: CharNewPageView },
  { path: "/topic", component: TopicPageView },
  { path: "/top100", component: Top100PageView },
  { path: "*", component: NotFoundView },
];

const privateRoute = [];

export { privateRoute, publicRoute };
