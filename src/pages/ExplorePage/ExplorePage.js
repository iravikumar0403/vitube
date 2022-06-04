import { Fragment, useState } from "react";
import { VideoCard } from "components";
import { useCategories, useVideos } from "context";
import { useDocumentTitle } from "hooks";
import { filterByCategory } from "utils";

//css imports
import classes from "./ExplorePage.module.css";
const { chips_container, chip, active } = classes;

export const ExplorePage = () => {
  useDocumentTitle("Vitube - Explore");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { videos } = useVideos();
  const { categories } = useCategories();

  const filteredVideos = filterByCategory(videos, selectedCategory);

  return (
    <Fragment>
      <div className={chips_container}>
        <span
          className={`${chip} ${selectedCategory === "All" ? active : ""}`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </span>
        {categories.map((category) => (
          <span
            key={category._id}
            className={`${chip} ${
              category.slug === selectedCategory ? active : ""
            }`}
            onClick={() => setSelectedCategory(category.slug)}
          >
            {category.title}
          </span>
        ))}
      </div>
      <div className="listing-grid my-3">
        {filteredVideos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </Fragment>
  );
};
