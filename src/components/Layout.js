import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <div className="flex pos-rel">
      <Sidebar />
      <Outlet />
    </div>
  );
};
