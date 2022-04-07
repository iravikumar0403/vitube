import { AuthProvider } from "./auth-context";
import { CategoriesProvider } from "./categories-context";
import { ModalProvider } from "./modal-context";
import { PlaylistProvider } from "./playlist-context";
import { ThemeProvider } from "./theme-context";
import { VideosProvider } from "./videos-context";

export const StateProvider = ({ children }) => {
  return (
    <AuthProvider>
      <PlaylistProvider>
        <CategoriesProvider>
          <VideosProvider>
            <ModalProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </ModalProvider>
          </VideosProvider>
        </CategoriesProvider>
      </PlaylistProvider>
    </AuthProvider>
  );
};
