import { useEffect } from 'react';

export const useEventListener = (target:EventTarget, type:string, listener:EventListenerOrEventListenerObject) =>
  useEffect(() => {
    target.addEventListener(type, listener);
    return () => {
      target.removeEventListener(type, listener);
    };
  }, [target, type, listener]);
