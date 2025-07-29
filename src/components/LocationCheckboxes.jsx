import React from "react";

const LOCATIONS = [
  { id: 'munich', label: 'Munich (Garching)' },
  // { id: 'boeblingen', label: 'Böblingen' }, // commented in your template
  { id: 'hamburg', label: 'Hamburg' },
];

export default function LocationCheckboxes({ value, onChange, error }) {
  return (
    <fieldset className={`location-fieldset${error ? ' error' : ''}`}>
      <legend className="location-header">Select Location</legend>
      {LOCATIONS.map(loc => (
        <div key={loc.id} className="location-input">
          <input
            type="checkbox"
            id={`location-${loc.id}`}
            value={loc.label}
            checked={value.includes(loc.label)}
            onChange={(e) => {
              if (e.target.checked)
                onChange([...value, loc.label]);
              else
                onChange(value.filter(v => v !== loc.label));
            }}
            name="locations"
          />
          <label htmlFor={`location-${loc.id}`}>{loc.label}</label>
        </div>
      ))}
      {error && <div className="error-msg">Please select at least one location</div>}
    </fieldset>
  );
}
