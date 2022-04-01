import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const navlinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Explore",
      path: "/explore",
    },
    {
      title: "Playlist",
      path: "/playlist",
    },
    {
      title: "Watch Later",
      path: "/watchlater",
    },
    {
      title: "Liked Videos",
      path: "/liked",
    },
    {
      title: "History",
      path: "/history",
    },
  ];

  return (
    <div className="sidebar">
      {navlinks.map(({ title, path }) => (
        <NavLink key={path} className="nav-link" to={path}>
          {title}
        </NavLink>
      ))}
    </div>
  );
};
