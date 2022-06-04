import { useParams } from "react-router-dom";

export const VideoPlayer = () => {
  const { videoId } = useParams();
  return (
    <iframe
      width="100%"
      height="516"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
