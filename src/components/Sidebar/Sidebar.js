import { useSidebar } from "context";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";

const { sidebar_wrapper, sidebar, nav_link, active } = classes;

export const Sidebar = () => {
  const { isOpen, hideSidebar } = useSidebar();
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
      path: "/likes",
    },
    {
      title: "History",
      path: "/history",
    },
  ];

  return (
    <div
      className={`${sidebar_wrapper} ${isOpen ? active : ""}`}
      onClick={hideSidebar}
    >
      <div className={sidebar}>
        {navlinks.map(({ title, path }) => (
          <NavLink
            key={path}
            className={({ isActive }) =>
              isActive ? `${nav_link} ${active}` : nav_link
            }
            to={path}
          >
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
