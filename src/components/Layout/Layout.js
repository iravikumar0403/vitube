import { Outlet } from "react-router-dom";
import { Sidebar } from "components";
import classes from "./Layout.module.css";

const { layout, main } = classes;

export const Layout = () => {
  return (
    <div className={layout}>
      <Sidebar />
      <main className={main}>
        <Outlet />
      </main>
    </div>
  );
};
