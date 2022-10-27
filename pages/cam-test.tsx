import { useEffect, useRef } from "react";

const VideoFeed = () => {
  const videoEl = useRef(null);

  useEffect(() => {
    if (!videoEl) {
      return;
    }
    navigator.mediaDevices
      .getUserMedia({ video: { width: { min: 800 }, height: { min: 800 } } })
      .then((stream) => {
        let video = videoEl.current;
        video.srcObject = stream;
        video.play();
      });
  }, [videoEl]);

  return <video ref={videoEl} />;
};

export default VideoFeed;
