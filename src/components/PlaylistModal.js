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
import { toast } from "react-toastify";

export const PlaylistModal = () => {
  const { isModalVisible, selectedVideo, closeModal } = useModal();
  const [showNewPlaylistForm, setShowNewPlaylistForm] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState("");
  const { playlists, dispatch } = usePlaylist();
  const [loaders, setLoaders] = useState([]);
  const modalRef = useRef(null);
  useOutsideClick(modalRef, closeModal, true);

  const handleChange = async (playlist) => {
    setLoaders((prev) => [...prev, playlist._id]);
    let updatedList = playlist;
    if (findVideoInPlaylist(selectedVideo._id, playlist)) {
      updatedList = await removeVideoFromPlaylist(
        selectedVideo._id,
        playlist._id
      );
      toast.info(`Video removed from ${playlist.title}`);
    } else {
      updatedList = await addVideoToPlaylist(selectedVideo, playlist._id);
      toast.success(`Video added to ${playlist.title}`);
    }
    if (updatedList) {
      dispatch({
        type: "UPDATE_PLAYLIST",
        payload: updatedList,
      });
    }
    setLoaders((prev) => prev.filter((loader) => loader !== playlist._id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const playlists = await createPlaylist(playlistTitle);
    dispatch({
      type: "SET_PLAYLISTS",
      payload: playlists,
    });
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
                  <div className="py-1 playlist-checkbox" key={playlist._id}>
                    {loaders.some((loader) => loader === playlist._id) ? (
                      <div className="loader"></div>
                    ) : (
                      <input
                        type="checkbox"
                        value={playlist._id}
                        id={playlist._id}
                        checked={Boolean(
                          findVideoInPlaylist(selectedVideo._id, playlist)
                        )}
                        onChange={(e) => handleChange(playlist)}
                      />
                    )}

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
