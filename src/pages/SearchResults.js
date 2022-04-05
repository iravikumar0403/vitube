import { VideoCard } from "components";
import { useVideos } from "context";
import { useDocumentTitle } from "hooks";
import { Link, useSearchParams } from "react-router-dom";

export const SearchResults = () => {
  const { videos } = useVideos();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  useDocumentTitle(`Vitube - ${query}`);

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredVideos.length === 0) {
    return (
      <div className="text-center my-5">
        <span>No videos found matching your query. </span>
        <Link className="link" to="/explore">
          Explore videos
        </Link>
      </div>
    );
  }

  return (
    <div className="listing-grid my-3">
      {filteredVideos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};
