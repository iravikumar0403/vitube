import { AuthProvider } from "./auth-context";
import { CategoriesProvider } from "./categories-context";
import { ModalProvider } from "./modal-context";
import { PlaylistProvider } from "./playlist-context";
import { SidebarProvider } from "./sidebar-context";
import { ThemeProvider } from "./theme-context";
import { VideosProvider } from "./videos-context";

export const StateProvider = ({ children }) => {
  return (
    <AuthProvider>
      <PlaylistProvider>
        <CategoriesProvider>
          <VideosProvider>
            <ModalProvider>
              <SidebarProvider>
                <ThemeProvider>{children}</ThemeProvider>
              </SidebarProvider>
            </ModalProvider>
          </VideosProvider>
        </CategoriesProvider>
      </PlaylistProvider>
    </AuthProvider>
  );
};
