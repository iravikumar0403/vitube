import React from "react";
import reactDom from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = () => {
  return reactDom.createPortal(
    <ToastContainer hideProgressBar theme="colored" position="bottom-left" />,
    document.body
  );
};
