import React, { useRef } from "react";

export default function FileUpload({ label, onFileChange, error, buttonLabel, file, accept, required }) {
  const fileInputRef = useRef();
  return (
    <div className="input-wrapper file">
      <label className={error ? "error" : ""}>
        {label}
      </label>
      <button
        className="fileBtn"
        type="button"
        onClick={() => fileInputRef.current.click()}
        style={error ? {color: "red"} : {}}
      >
        {file ? file.name : buttonLabel}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{display: "none"}}
        accept={accept}
        onChange={e => onFileChange(e.target.files[0])}
        required={required}
      />
      {error && <div className="error-msg">{error}</div>}
    </div>
  );
}
