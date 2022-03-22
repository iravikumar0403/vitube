import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "components";
import { Homepage } from "pages";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
