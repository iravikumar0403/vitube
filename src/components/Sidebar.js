import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/explore">
        Explore
      </NavLink>
      <NavLink className="nav-link" to="/playlist">
        Playlist
      </NavLink>
      <NavLink className="nav-link" to="/watchlater">
        Watch Later
      </NavLink>
      <NavLink className="nav-link" to="/liked">
        Liked Videos
      </NavLink>
      <NavLink className="nav-link" to="/history">
        History
      </NavLink>
    </div>
  );
};
