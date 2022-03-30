import { AuthProvider } from "./auth-context";
import { CategoriesProvider } from "./categories-context";
import { VideosProvider } from "./videos-context";

export const StateProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <VideosProvider>{children}</VideosProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
};
