import { History, Layout, LikedVideos, Playlist, WatchLater } from "components";
import { RequireAuth } from "components/RequireAuth";
import MockmanEs from "mockman-js";
import { ExplorePage, Homepage, Login, Signup } from "pages";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/",
        element: <RequireAuth />,
        children: [
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
    ],
  },
  {
    path: "/mock",
    element: <MockmanEs />,
  },
];
