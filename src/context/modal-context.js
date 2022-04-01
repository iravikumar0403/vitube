import { useState, useContext, createContext } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const showModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const isModalVisible = selectedVideo !== null;

  return (
    <ModalContext.Provider
      value={{ selectedVideo, isModalVisible, showModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
