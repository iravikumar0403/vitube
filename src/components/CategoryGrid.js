import { VideoCard } from "./VideoCard";
import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";

export const CategoryGrid = ({ category: { videos, categoryName } }) => {
  if (!videos?.length) {
    return "";
  }

  return (
    <section className="container">
      <h2>{categoryName}</h2>
      <div className="grid-slider">
        <button
          className="btn text-light slide-btn left"
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
          className="btn text-light slide-btn right"
          onClick={(e) => (e.currentTarget.previousSibling.scrollLeft += 300)}
        >
          <BiCaretRightCircle className="slider-icon" />
        </button>
      </div>
    </section>
  );
};
