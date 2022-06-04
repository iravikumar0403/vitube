import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => {
    setIsOpen(true);
  };

  const hideSidebar = () => {
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <SidebarContext.Provider
      value={{ isOpen, toggleSidebar, showSidebar, hideSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebar = () => useContext(SidebarContext);

export { SidebarProvider, useSidebar };
