import { History, Layout, LikedVideos, Playlist, WatchLater } from "components";
import { ExplorePage, Homepage } from "pages";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/explore",
        element: <ExplorePage />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path: "/watchlater",
        element: <WatchLater />,
      },
      {
        path: "/liked",
        element: <LikedVideos />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
];
