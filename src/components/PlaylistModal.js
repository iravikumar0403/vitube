import { useState, Fragment, useRef } from "react";
import ReactDOM from "react-dom";
import { findVideoInPlaylist } from "utils";
import { usePlaylist, useModal } from "context";
import { useOutsideClick } from "hooks";
import {
  addVideoToPlaylist,
  createPlaylist,
  removeVideoFromPlaylist,
} from "services";

export const PlaylistModal = () => {
  const { isModalVisible, selectedVideo, closeModal } = useModal();
  const [showNewPlaylistForm, setShowNewPlaylistForm] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState("");
  const { playlists, setPlaylists } = usePlaylist();
  const modalRef = useRef(null);
  useOutsideClick(modalRef, closeModal, true);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const playlists = await createPlaylist(playlistTitle);
    setPlaylists(playlists);
    setShowNewPlaylistForm(false);
  };

  return ReactDOM.createPortal(
    <Fragment>
      {isModalVisible && (
        <div className={`modal ${isModalVisible && "open"}`} id="centeredModal">
          <div className="modal-dialog centered" ref={modalRef}>
            <div className="modal-header">
              <h3> Save to...</h3>
              <button className="btn icon-only text-light" onClick={closeModal}>
                <i className="fa fa-times"></i>
              </button>
            </div>
            {playlists.length > 0 && (
              <div className="modal-body">
                {playlists.map((playlist) => (
                  <div className="py-1" key={playlist._id}>
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
            )}
            <div className="modal-body text-center">
              {showNewPlaylistForm ? (
                <form onSubmit={handleSubmit}>
                  <input
                    className="input my-2"
                    type="text"
                    value={playlistTitle}
                    onChange={(e) => setPlaylistTitle(e.target.value)}
                    placeholder="my new playlist"
                    required
                  />
                  <input
                    className="input primary my-2"
                    type="submit"
                    value="Create"
                  />
                </form>
              ) : (
                <button
                  className="btn"
                  onClick={() => setShowNewPlaylistForm(true)}
                >
                  <span className="fs-1 px-1">+</span>Create a new playlist
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>,
    document.body
  );
};
