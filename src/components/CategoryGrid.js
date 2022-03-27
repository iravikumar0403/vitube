import { VideoCard } from "./VideoCard";

export const CategoryGrid = ({ category: { videos, categoryName } }) => {
  if (!videos?.length) {
    return "";
  }

  return (
    <section className="container">
      <h2>{categoryName}</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </section>
  );
};
