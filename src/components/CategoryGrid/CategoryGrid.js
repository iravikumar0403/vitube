import { VideoCard } from "components";
import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";
import { useTheme } from "context/theme-context";

//css imports
import classes from "./CategoryGrid.module.css";
const {
  category_section,
  video_slider,
  grid_slider,
  video_grid,
  slide_btn,
  left,
  right,
} = classes;

export const CategoryGrid = ({ category: { videos, categoryName } }) => {
  const { theme } = useTheme();
  if (!videos?.length) {
    return "";
  }

  return (
    <section className={category_section}>
      <h2>{categoryName}</h2>
      <div className={grid_slider}>
        <button
          className={`btn  ${slide_btn} ${left} ${
            theme === "dark" ? "text-light" : ""
          }`}
          onClick={(e) => (e.currentTarget.nextSibling.scrollLeft -= 300)}
        >
          <BiCaretLeftCircle />
        </button>
        <div className={video_slider}>
          <div className={video_grid}>
            {videos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        </div>
        <button
          className={`btn  ${slide_btn} ${right} ${
            theme === "dark" ? "text-light" : ""
          }`}
          onClick={(e) => (e.currentTarget.previousSibling.scrollLeft += 300)}
        >
          <BiCaretRightCircle />
        </button>
      </div>
    </section>
  );
};
