function MeditationRoom() {
  return (
    <section className="meditation">

      <h2>🎧 Meditation Room</h2>

      <div className="audio-card">
        <h3>🌱 Meditation Step 1</h3>

        <audio controls>
          <source 
            src="/audio/meditation-step1.mp3"
            type="audio/mp3"
          />
        </audio>
      </div>

      <div className="audio-card">
        <h3>🌿 Meditation Step 2</h3>

        <audio controls>
          <source 
            src="/audio/meditation-step2.mp3"
            type="audio/mp3"
          />
        </audio>
      </div>

       <div className="audio-card">
        <h3>🌿 Meditation Step 3</h3>

        <audio controls>
          <source 
            src="/audio/meditation-step3.mp3"
            type="audio/mp3"
          />
        </audio>
      </div>

    </section>
  );
}

export default MeditationRoom;