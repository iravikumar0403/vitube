import { History, Layout, LikedVideos, RequireAuth } from "components";
import MockmanEs from "mockman-js";
import {
  ExplorePage,
  Homepage,
  Login,
  Signup,
  Playlist,
  PlaylistDetails,
  Watchlater,
  WatchVideo,
} from "pages";

export const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
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
        path: "/video/:videoId",
        element: <WatchVideo />,
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
            path: `/playlist/:playlist_id`,
            element: <PlaylistDetails />,
          },
          {
            path: "/watchlater",
            element: <Watchlater />,
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
