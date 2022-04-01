import { Fragment, useRef } from "react";
import ReactDOM from "react-dom";
import { findVideoInPlaylist } from "utils";
import { usePlaylist, useModal } from "context";
import { useOutsideClick } from "hooks";
import { addVideoToPlaylist, removeVideoFromPlaylist } from "services";

export const PlaylistModal = () => {
  const { isModalVisible, selectedVideo, closeModal } = useModal();
  const { setPlaylists } = usePlaylist();
  const modalRef = useRef(null);
  useOutsideClick(modalRef, closeModal, true);
  const { playlists } = usePlaylist();
  const handleChange = async (playlist) => {
    let updatedList = playlist;
    if (findVideoInPlaylist(selectedVideo._id, playlist)) {
      updatedList = await removeVideoFromPlaylist(
        selectedVideo._id,
        playlist._id
      );
    } else {
      updatedList = await addVideoToPlaylist(selectedVideo, playlist._id);
    }
    setPlaylists((prev) =>
      prev.map((pl) => {
        if (pl._id === updatedList._id) {
          return updatedList;
        }
        return pl;
      })
    );
  };

  return ReactDOM.createPortal(
    <Fragment>
      {isModalVisible && (
        <div className={`modal ${isModalVisible && "open"}`} id="centeredModal">
          <div className="modal-dialog centered" ref={modalRef}>
            <div class="modal-header">
              <h3> Save to...</h3>
              <button class="btn icon-only text-light" onClick={closeModal}>
                <i class="fa fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              {playlists.map((playlist) => (
                <div className="py-1">
                  <input
                    type="checkbox"
                    value={playlist._id}
                    id={playlist._id}
                    checked={Boolean(
                      findVideoInPlaylist(selectedVideo._id, playlist)
                    )}
                    onChange={(e) => handleChange(playlist)}
                  />
                  <label htmlFor={playlist._id}>{playlist.title}</label>
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <button className="btn primary">Primary</button>
              <button className="btn primary outlined">Secondary</button>
            </div>
          </div>
        </div>
      )}
    </Fragment>,
    document.body
  );
};
