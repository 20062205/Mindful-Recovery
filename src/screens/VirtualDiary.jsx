import React, { useState, useEffect } from "react";
import "./styles.css"; // Ensure this imports your CSS styles

const VirtualDiary = () => {
  const [journalInput, setJournalInput] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Load entries from localStorage on component mount
    const savedEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(savedEntries);
  }, []);

  const saveEntry = () => {
    if (journalInput.trim()) {
      const now = new Date();
      const dateTime = now.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      const newEntry = { text: journalInput, timestamp: dateTime };

      // Update state and localStorage
      const updatedEntries = [...entries, newEntry];
      setEntries(updatedEntries);
      localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));

      setJournalInput(""); // Clear input
    }
  };

  return (
    <div className="clouds">
      <div className="cloud"></div>
      <div className="cloud"></div>
      <div className="container">
        <header>
          <h1>My Virtual Diary</h1>
          <p>Write your thoughts, clear your mind.</p>
        </header>
        <main>
          <div className="journal-section">
            <h2>Today's Journal</h2>
            <textarea
              placeholder="Dear diary..."
              value={journalInput}
              onChange={(e) => setJournalInput(e.target.value)}
            ></textarea>
            <button onClick={saveEntry}>Save</button>
          </div>
          <div className="journal-entries">
            <h2>Saved Entries</h2>
            <div className="entries-frame">
              {entries.map((entry, index) => (
                <div className="entry" key={index}>
                  <p>
                    <strong>{entry.timestamp}</strong>
                  </p>
                  <p>{entry.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="daily-tips">
            <h2>Daily Tip</h2>
            <p id="dailyTip">Take a deep breath and focus on the present moment.</p>
          </div>
        </main>
        <footer>
          <p>Created with care for your well-being.</p>
        </footer>
      </div>
    </div>
  );
};

export default VirtualDiary;
