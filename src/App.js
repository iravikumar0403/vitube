import { Fragment, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { Footer, Navbar } from "components";
import { routes } from "config";

const App = () => {
  const routesElement = useRoutes(routes);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Fragment>
      <Navbar />
      {routesElement}
      <Footer />
    </Fragment>
  );
};

export default App;
