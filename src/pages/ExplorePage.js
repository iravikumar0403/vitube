import { VideoCard } from "components";
import { useVideos } from "context";
import { useDocumentTitle } from "hooks";

export const ExplorePage = () => {
  useDocumentTitle("Explore - ViTube");
  const { videos } = useVideos();
  return (
    <div className="listing-grid my-3">
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};
