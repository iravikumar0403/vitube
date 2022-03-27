import React from "react";
import { CategoriesProvider } from "./categories-context";
import { VideosProvider } from "./videos-context";

export const StateProvider = ({ children }) => {
  return (
    <CategoriesProvider>
      <VideosProvider>{children}</VideosProvider>
    </CategoriesProvider>
  );
};
