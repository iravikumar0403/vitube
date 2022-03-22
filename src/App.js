import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "components";
import { Homepage } from "pages";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
