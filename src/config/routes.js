import { Layout, RequireAuth } from "components";
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
  Likes,
  WatchHistory,
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
            path: "/likes",
            element: <Likes />,
          },
          {
            path: "/history",
            element: <WatchHistory />,
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
