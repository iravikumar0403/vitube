import pageNotFound from "asset/404.png";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="main text-center">
      <div className="container">
        <img src={pageNotFound} alt="" />
        <p>
          Oops! Looks like you are lost. Let me take you back{" "}
          <Link className="link" to="/">
            home
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
