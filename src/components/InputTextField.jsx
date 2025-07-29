import React from "react";

export default function InputTextField({ label, name, value, onChange, type="text", required=false, placeholder, error }) {
  return (
    <div className="input-wrapper">
      <label className={error ? "error" : ""} htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={error ? "missingData" : ""}
      />
      {error && <div className="error-msg">{error}</div>}
    </div>
  );
}
