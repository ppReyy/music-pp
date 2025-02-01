import { useEffect, useState } from "react";

export default function MusicPlayer() {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);

  useEffect(() => {
    const audioInstance = new Audio("/rosee.mp3");
    audioInstance.loop = true;
    setAudio(audioInstance);
  }, []);

  const togglePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((e) => console.log("Autoplay blocked:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (audio) {
      audio.volume = newVolume;
    }
    setVolume(newVolume);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Next.js Music Player</h1>
      
      {/* Album Art */}
      <img 
        src="/album-arts/death-bed.jpg" 
        alt="Album Art" 
        width="300" 
        style={{ borderRadius: "10px", marginBottom: "20px" }}
      />
      
      {/* Play/Pause Button */}
      <div>
        <button onClick={togglePlay} style={buttonStyle}>
          {isPlaying ? "Pause ⏸" : "Play ▶"}
        </button>
      </div>

      {/* Volume Control */}
      <div style={{ marginTop: "15px" }}>
        <label>Volume: </label>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.1" 
          value={volume} 
          onChange={changeVolume} 
        />
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "18px",
  marginTop: "10px",
  cursor: "pointer",
};
