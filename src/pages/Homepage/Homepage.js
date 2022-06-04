import landingImage from "asset/landing-page.png";
import { CategoryGrid } from "components";
import { useCategories } from "context";
import { useDocumentTitle } from "hooks";
import { Link } from "react-router-dom";

// css import
import classes from "./Homepage.module.css";
const { container, banner, banner_img } = classes;

export const Homepage = () => {
  useDocumentTitle("Vitube");
  const { categories } = useCategories();

  return (
    <main className={container}>
      <section className={banner}>
        <div>
          <h2 className="text-primary">Grow your video editing skills</h2>
          <p>
            Learn everything you need to know about video editing from experts
            with real-world experience. Explore our courses and tutorials below
            and start taking your video editing skills to the next level today!
          </p>
          <Link to="/explore" className="btn primary my-4">
            Explore tutorials
          </Link>
        </div>
        <img className={banner_img} src={landingImage} alt="" />
      </section>
      {categories.map((category) => (
        <CategoryGrid key={category._id} category={category} />
      ))}
    </main>
  );
};
