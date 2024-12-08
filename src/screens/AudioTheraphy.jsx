import React from "react";
import "./audiotheraphy.css"; // Import your CSS file

const AudioTherapy = () => {
  return (
    <div id="main">
      <section id="audiobooks">
        <h1 className="section-headings">Audio Therapy</h1>

        {/* Playlist Section */}
        <section id="playlist">
          <h2 className="section-subheading">Playlist</h2>
          <div className="playlist-grid">
            <a
              href="https://open.spotify.com/playlist/0cj48sijCRDJ3Hatx1k1vJ?si=oPOSneyKQuy7pPKWVqR7Sg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="playlist1.jpg" alt="Playlist 1" />
            </a>
            <a
              href="https://open.spotify.com/playlist/37i9dQZF1DWXe9gFZP0gtP?si=FejdhqAQRr24uNWQSA6Wrw&pi=JRabevfqRqmaf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="playlist2.jpg" alt="Reading Soundtrack" />
            </a>
            <a
              href="https://open.spotify.com/playlist/37i9dQZF1DWZwtERXCS82H?si=F4h3CqTISlSa1bNTuu4lew&pi=KW7ymrr_RO2qy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="playlist3.jpg" alt="Playlist 3" />
            </a>
          </div>
        </section>

        {/* Books Section */}
        <h2 className="section-books">Books</h2>
        <div className="image-grid">
          <a
            href="https://www.audible.in/pd/Unwinding-Anxiety-Audiobook/1473594278"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="unwinding anxiety.jpg" alt="Unwinding Anxiety" />
          </a>
          <a
            href="https://www.audiobooks.com/audiobook/retrain-your-brain-cognitive-behavioral-therapy-in-7-weeks-a-workbook-for-managing-depression-and-anxiety/365128"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="retrain your brain.jpg" alt="Retrain Your Brain" />
          </a>
          <a
            href="https://www.audiobooks.com/audiobook/anxiety-a-philosophical-guide/817691"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="anxiety a philosophical guide.jpg" alt="Anxiety: A Philosophical Guide" />
          </a>
          <a
            href="https://www.audible.in/pd/Think-Like-A-Monk-Audiobook/B07YSQ8GT5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://m.media-amazon.com/images/I/51n4UO2a+VS._SL500_.jpg"
              alt="Think Like A Monk"
            />
          </a>
          <a
            href="https://www.audible.in/pd/Lifes-Amazing-Secrets-Audiobook/B081S9NKRP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://m.media-amazon.com/images/I/514sscPA15L._SL500_.jpg"
              alt="Life's Amazing Secrets"
            />
          </a>
          <a
            href="https://www.audible.in/pd/Rich-Dad-Poor-Dad-Audiobook/B079P9PGJB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://m.media-amazon.com/images/I/51AHZGhzZEL._SL500_.jpg"
              alt="Rich Dad Poor Dad"
            />
          </a>
          <a
            href="https://www.audiobooks.com/audiobook/confidence-holding-your-seat-through-lifes-eight-worldly-winds/765286"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="Confidence.jpg" alt="Confidence" />
          </a>
          <a
            href="https://www.audible.in/pd/How-to-Talk-to-Anyone-Audiobook/B079TLJV49"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://m.media-amazon.com/images/I/51hAGh15bTL._SL500_.jpg"
              alt="How to Talk to Anyone"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AudioTherapy;


