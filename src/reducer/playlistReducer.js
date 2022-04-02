export const playlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: payload,
      };
    case "UPDATE_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((pl) =>
          pl._id === payload._id ? payload : pl
        ),
      };
    case "UPDATE_WATCHLATER":
      return {
        ...state,
        watchlater: payload,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
