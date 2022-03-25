import playIcon from "asset/playIcon.svg";
import { BsThreeDotsVertical } from "react-icons/bs";

export const VideoCard = () => {
  return (
    <div class="card">
      <div class="card-media">
        <div className="play-icon">
          <img src={playIcon} alt="" />
        </div>
        <img
          class="img-responsive img-rounded"
          src="https://picsum.photos/800/400"
          alt="card media"
        />
      </div>
      <div class="card-body">
        <p class="card-title fs-1 m-0">Card Title Card Title</p>
      </div>
      <div class="card-footer">
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div class="avatar avatar-xs">AB</div>
          <div>
            <p className="text-muted">1k views</p>
          </div>
        </div>
        <button className="btn">
          <BsThreeDotsVertical className="fs-1" />
        </button>
      </div>
    </div>
  );
};
