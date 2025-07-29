import React from "react";

export default function BatchSelect({ batches, value, onChange, error }) {
  return (
    <div className="input-wrapper">
      <label className={`batch-label${error ? ' error' : ''}`}>
        Which Batch do you want to be part of?
      </label>
      <select
        name="batch"
        value={value}
        onChange={onChange}
        required
        className={error ? "missingData" : ""}
      >
        <option value="">Choose a batch</option>
        {batches.map((batch) => (
          <option key={batch.name} value={batch.name}>
            Batch#{batch.name} ({new Date(batch.startDate).toLocaleDateString("en-EN", {year:"numeric",month:"long",day:"numeric"})} to {new Date(batch.endDate).toLocaleDateString("en-EN",{year:"numeric",month:"long",day:"numeric"})})
          </option>
        ))}
      </select>
      {error && <div className="error-msg">Please select a batch</div>}
    </div>
  );
}
