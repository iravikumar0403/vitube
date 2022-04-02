import { useParams } from "react-router-dom";

export const VideoPlayer = () => {
  const { videoId } = useParams();
  return (
    <div>
      <iframe
        width="917"
        height="516"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
