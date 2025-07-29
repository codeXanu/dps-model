import React from "react";

export default function ConsentCheckbox({ checked, onChange, error }) {
  return (
    <fieldset className="consent-section">
      <legend>Declaration of consent</legend>
      <div className="consent-input">
        <input
          type="checkbox"
          id="consent-true"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          name="consent"
        />
        <label htmlFor="consent-true">
          I agree with the processing of my personal data provided above for the
          purpose of my application as described in the{" "}
          <a href="https://www.digitalproductschool.io/privacy-policy-dps" target="_blank" rel="noopener noreferrer">
            privacy policy
          </a>
          . The data collected through this application form will be deleted at least twelve months after the beginning of the batch you applied for.
        </label>
      </div>
      {error && <div className="error-msg">Please give your consent</div>}
    </fieldset>
  );
}
