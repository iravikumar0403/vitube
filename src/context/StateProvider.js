import { AuthProvider } from "./auth-context";
import { CategoriesProvider } from "./categories-context";
import { PlaylistProvider } from "./playlist-context";
import { VideosProvider } from "./videos-context";

export const StateProvider = ({ children }) => {
  return (
    <AuthProvider>
      <PlaylistProvider>
        <CategoriesProvider>
          <VideosProvider>{children}</VideosProvider>
        </CategoriesProvider>
      </PlaylistProvider>
    </AuthProvider>
  );
};
