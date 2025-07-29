import React from "react";

export default function TrackSelect({ tracks, value, onChange, error }) {
  return (
    <div className="input-wrapper">
      <label className={`track-label${error ? ' error' : ''}`}>
        For which track do you want to apply?
      </label>
      <select
        name="track"
        value={value}
        onChange={onChange}
        required
        className={error ? "missingData" : ""}
      >
        <option value="">Choose a track</option>
        {tracks.filter(track => track.handle !== 'AC').map((track) => (
          <option key={track.handle} value={track.handle}>
            {track.name}
          </option>
        ))}
      </select>
      {error && <div className="error-msg">Please select a track</div>}
    </div>
  );
}
