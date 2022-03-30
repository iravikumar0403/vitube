import { useEffect } from "react";

export const useOutsideClick = (ref, handler, willExecute) => {
  useEffect(() => {
    const events = ["mousedown", "touchstart"];
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target) && willExecute) {
        handler(event);
      }
    };
    events.forEach((event) => {
      document.addEventListener(event, listener);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, listener);
      });
    };
  }, [ref, handler, willExecute]);
};
