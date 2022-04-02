import { useModal } from "context";
import { useOutsideClick } from "hooks";
import { useState, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdMoreTime } from "react-icons/md";
import { RiPlayListLine } from "react-icons/ri";

export const VideoDropdownMenu = ({ video }) => {
  const { showModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef, () => setIsOpen(false), isOpen);

  const handleWatchlaterClick = () => {
    //to do
  };

  const handleAddToPlaylistClick = () => {
    showModal(video);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="btn" onClick={() => setIsOpen((prev) => !prev)}>
        <BsThreeDotsVertical className="fs-1" />
      </button>
      <ul className={`dropdown-menu ${isOpen && "expanded"}`}>
        <li className="dropdown-item" onClick={handleWatchlaterClick}>
          <MdMoreTime />
          Watch Later
        </li>
        <li className="dropdown-item" onClick={handleAddToPlaylistClick}>
          <RiPlayListLine />
          Add to playlist
        </li>
      </ul>
    </div>
  );
};
