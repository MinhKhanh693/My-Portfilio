import React, { useEffect, useRef, useState } from "react";
import TimeSlider from "react-input-slider";
import "./MusicCard.css";
import Music from "./dataMusic";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
export default function MusicCard() {
  const [toggle, setToggle] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();
  const thumbCDRef = useRef();

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };
  useEffect(() => {
    thumbCDRef.current.animate(
      [
        {
          transform: "rotate(360deg)",
        },
      ],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
    shuffle(Music);
    audioRef.current.volume = 0.65;
  }, []);

  useEffect(() => {
    isPlay ? audioRef.current.play() : audioRef.current.pause();

    audioRef.current.addEventListener("ended", function () {
      setAudioIndex((audioIndex + 1) % Music.length);
    });
  }, [isPlay, audioIndex]);

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setIsPlay(true);
      audioRef.current.play();
    }
  };

  const PlayClick = () => {
    setIsPlay(!isPlay);
  };
  return (
    <>
      <div className="play-song-box">
        <div className="thumb-img-box" onClick={(e) => setToggle(!toggle)}>
          <div className="thumb-img" ref={thumbCDRef}>
            <svg
              fill="#dc143c"
              viewBox="0 0 512 512"
              className="thumb-note note-1"
            >
              <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
            </svg>
            <svg
              fill="#dc143c"
              viewBox="0 0 384 512"
              className="thumb-note note-2"
            >
              <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
            </svg>
            <svg
              fill="#dc143c"
              viewBox="0 0 512 512"
              className="thumb-note note-3"
            >
              <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
            </svg>
            <svg
              fill="#dc143c"
              viewBox="0 0 384 512"
              className="thumb-note note-4"
            >
              <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
            </svg>
          </div>
        </div>
        <div className={`play-song-info ${toggle ? "active-Music-Card" : ""}`}>
          <span className="play-song-name">{Music[audioIndex].name}</span>
          <div className="play-song-progress">
            <TimeSlider
              axis="x"
              xmax={duration}
              x={currentTime}
              onChange={handleTimeSliderChange}
              styles={{
                track: {
                  width: "90%",
                  backgroundColor: "white",
                  height: "2px",
                  marginLeft: 10,
                  marginRight: 10,
                },
                active: {
                  backgroundColor: "crimson",
                  height: "2px",
                },
                thumb: {
                  marginTop: "-2px",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "crimson",
                  borderRadius: 5,
                },
              }}
            />
            <audio
              autoPlay
              id="audio"
              src={Music[audioIndex].path}
              ref={audioRef}
              onLoadedData={handleLoadedData}
              onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
            ></audio>
          </div>
          <div className="play-song-actions">
            <i
              className="fas fa-backward play-song-actions-item"
              onClick={() => setAudioIndex((audioIndex + 1) % Music.length)}
            ></i>
            <i
              className={`${
                !isPlay ? "far fa-play-circle" : "far fa-pause-circle"
              } play-song-actions-item`}
              onClick={PlayClick}
            ></i>
            <i
              className="fas fa-forward play-song-actions-item"
              onClick={() => setAudioIndex((audioIndex + 1) % Music.length)}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}
