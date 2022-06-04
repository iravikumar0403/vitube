import { VideoCard } from "components";
import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";
import { useTheme } from "context/theme-context";

export const CategoryGrid = ({ category: { videos, categoryName } }) => {
  const { theme } = useTheme();
  if (!videos?.length) {
    return "";
  }

  return (
    <section className="container">
      <h2>{categoryName}</h2>
      <div className="grid-slider">
        <button
          className={`btn slide-btn left ${
            theme === "dark" ? "text-light" : ""
          }`}
          onClick={(e) => (e.currentTarget.nextSibling.scrollLeft -= 300)}
        >
          <BiCaretLeftCircle className="slider-icon" />
        </button>
        <div className="video-slider">
          <div className="video-grid">
            {videos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        </div>
        <button
          className={`btn slide-btn right ${
            theme === "dark" ? "text-light" : ""
          }`}
          onClick={(e) => (e.currentTarget.previousSibling.scrollLeft += 300)}
        >
          <BiCaretRightCircle className="slider-icon" />
        </button>
      </div>
    </section>
  );
};
