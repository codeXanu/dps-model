import React, { useEffect, useState, useRef } from "react";
import { fetchBatches, fetchTracks } from "./api/api.js";

export default function ApplicationForm() {
  // Form state
  const [batches, setBatches] = useState([]);
  const [tracks, setTracks] = useState([]);

  const [batch, setBatch] = useState("");
  const [track, setTrack] = useState("");
  const [locations, setLocations] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [showcase, setShowcase] = useState("");
  const [source, setSource] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Refs for file inputs
  const cvInputRef = useRef(null);
  const coverInputRef = useRef(null);

  // Load batches and tracks from API
  useEffect(() => {
    fetchBatches().then((data) => {
      // Filter batches where application end date has not passed
      const today = new Date().getTime();
      const activeBatches = data.filter(
        (b) => new Date(b.applicationEndDate).getTime() > today
      );
      setBatches(activeBatches);
    });

    fetchTracks().then((data) => {
      // Filter out track with handle 'AC' (as in original code)
      const filteredTracks = data.filter((t) => t.handle !== "AC");
      setTracks(filteredTracks);
    });
  }, []);

  // Format date for display
  function formatBatchDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-EN", options);
  }

  // Handle location checkbox change
  function toggleLocation(value) {
    if (locations.includes(value)) {
      setLocations(locations.filter((l) => l !== value));
    } else {
      setLocations([...locations, value]);
    }
  }

  // Validate form fields
  function validate() {
    const errs = {};

    if (!batch) errs.batch = "Please select a batch";

    if (!track) errs.track = "Please select a track";

    if (!firstName.trim()) errs.firstName = "Please enter your first name";

    if (!lastName.trim()) errs.lastName = "Please enter your last name";

    if (!email.trim())
      errs.email = "Please enter your email";
    else {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(email)) {
        errs.email = "Please enter a valid email address";
      }
    }

    if (!cvFile) errs.cv = "Please upload your CV (PDF, max. 5MB)";
    else {
      const ext = cvFile.name.split(".").pop().toLowerCase();
      if (ext !== "pdf" || cvFile.size > 5 * 1024 * 1024) {
        errs.cv = "File must be PDF and max. 5MB";
      }
    }

    if (!locations.length) errs.locations = "Please select at least one location";

    if (!source.trim()) errs.source = "Please fill this field";

    if (!consentChecked) errs.consent = "You must agree to the consent";

    return errs;
  }

  // Handle form submit
  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      // Scroll to first error
      const firstErrorElem = document.querySelector(".missingData, .error");
      if (firstErrorElem) {
        firstErrorElem.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    setSubmitting(true);

    try {
      const fd = new FormData();
      locations.forEach((loc) => fd.append("locations", loc));
      fd.append("track", track);
      fd.append("firstName", firstName);
      fd.append("lastName", lastName);
      fd.append("email", email);
      fd.append("source", source);
      fd.append("consent", true);
      fd.append("batch", batch);
      fd.append("cv", cvFile);
      fd.append("portfolio", showcase);
      if (coverFile) fd.append("coverLetter", coverFile);

      const response = await fetch("https://my-digitalschool-al87q.ondigitalocean.app/api/raw/applications", {
        method: "POST",
        body: fd,
      });

      if (response.status === 200) {
        window.location.href = "https://www.digitalproductschool.io/application-success";
        const data = await response.json();
        console.log(data.message);
      } else {
        window.location.href = "https://www.digitalproductschool.io/application-fail";
      }
    } catch (error) {
      window.location.href = "https://www.digitalproductschool.io/application-fail";
    } finally {
      setSubmitting(false);
    }
  }

  return (
  
    <form className="application-form" noValidate onSubmit={handleSubmit}>
      {/* Batch Select */}
      <div className="input-wrapper">
        <label htmlFor="batch-select" className={`batch-label fading-label ${errors.batch ? "error" : ""}`}>
          Which Batch do you want to be part of?
        </label>
        <select
          id="batch-select"
          name="batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          className={errors.batch ? "missingData" : ""}
          required
        >
          <option value="">Which Batch do you want to be part of?</option>
          {batches.map((b) => (
            <option key={b.name} value={b.name}>
              Batch#{b.name} ({formatBatchDate(b.startDate)} to {formatBatchDate(b.endDate)})
            </option>
          ))}
        </select>
        {errors.batch && <div className="missingData">{errors.batch}</div>}
      </div>

      {/* Location Checkboxes */}
      <div className="input-wrapper consent-wrapper">
        <fieldset name="location">
          <legend className="location-header">Select Location</legend>
          {[
            { id: "munich-true", label: "Munich (Garching)" },
            // Boeblingen is commented out in original; do not include.
            { id: "hamburg-true", label: "Hamburg" },
          ].map(({ id, label }) => (
            <div key={id} className="location-input">
              <input
                type="checkbox"
                id={id}
                name="location-option"
                value={label}
                checked={locations.includes(label)}
                onChange={() => toggleLocation(label)}
              />
              <label htmlFor={id}>
                <span>{label}</span>
              </label>
            </div>
          ))}
          {errors.locations && <div className="missingData">{errors.locations}</div>}
        </fieldset>
      </div>

      {/* Track Select */}
      <div className="input-wrapper">
        <label htmlFor="track-select" className={`track-label fading-label ${errors.track ? "error" : ""}`}>
          For which track do you want to apply?
        </label>
        <select
          id="track-select"
          name="track"
          value={track}
          onChange={(e) => setTrack(e.target.value)}
          className={errors.track ? "missingData" : ""}
          required
        >
          <option value="">For which track do you want to apply?</option>
          {tracks.map((t) => (
            <option key={t.handle} value={t.handle}>
              {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
            </option>
          ))}
        </select>
        {errors.track && <div className="missingData">{errors.track}</div>}
      </div>

      {/* First Name */}
      <div className="input-wrapper">
        <label htmlFor="firstName-input" className={`firstName-label fading-label ${errors.firstName ? "error" : ""}`}>
          What is your first name?
        </label>
        <input
          type="text"
          id="firstName-input"
          name="first-name"
          placeholder="What is your first name?"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={errors.firstName ? "missingData" : ""}
        />
        {errors.firstName && <div className="missingData">{errors.firstName}</div>}
      </div>

      {/* Last Name */}
      <div className="input-wrapper">
        <label htmlFor="lastName-input" className={`lastName-label fading-label ${errors.lastName ? "error" : ""}`}>
          What is your last name?
        </label>
        <input
          type="text"
          id="lastName-input"
          name="last-name"
          placeholder="What is your last name?"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={errors.lastName ? "missingData" : ""}
        />
        {errors.lastName && <div className="missingData">{errors.lastName}</div>}
      </div>

      {/* Email */}
      <div className="input-wrapper">
        <label htmlFor="email-input" className={`email-label fading-label ${errors.email ? "error" : ""}`}>
          What is your email?
        </label>
        <input
          type="email"
          id="email-input"
          name="email"
          placeholder="What is your email adress?"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "missingData" : ""}
        />
        {errors.email && <div className="missingData">{errors.email}</div>}
      </div>

      {/* CV Upload */}
      <div className="input-wrapper file">
        <label htmlFor="cv-input" className={`cv-label ${errors.cv ? "error" : ""}`}>
          Please upload your CV (PDF, max. 5MB)
        </label>
        <button
          type="button"
          className="fileBtn"
          id="cvBtn"
          onClick={() => cvInputRef.current.click()}
          style={errors.cv ? { color: "red" } : {}}
        >
          {cvFile ? cvFile.name : "Choose file"}
        </button>
        <input
          ref={cvInputRef}
          type="file"
          name="cv"
          id="cv-input"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={(e) => {
            if (e.target.files.length === 1) {
              setCvFile(e.target.files[0]);
              setErrors((prev) => ({ ...prev, cv: null }));
            } else {
              setCvFile(null);
            }
          }}
        />
        {errors.cv && <div className="missingData">{errors.cv}</div>}
      </div>

      {/* Cover Letter / Motivation Upload */}
      <div className="input-wrapper cv-wrapper file">
        <label htmlFor="motivation-input" className="motivation-label">
          Describe your motivation in a cover letter (PDF, max. 5MB, optional)
        </label>
        <button
          type="button"
          id="motivationBtn"
          className="fileBtn"
          onClick={() => coverInputRef.current.click()}
        >
          {coverFile ? coverFile.name : "Choose file"}
        </button>
        <input
          ref={coverInputRef}
          type="file"
          name="motivation"
          id="motivation-input"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={(e) => {
            if (e.target.files.length === 1) {
              setCoverFile(e.target.files[0]);
            } else {
              setCoverFile(null);
            }
          }}
        />
      </div>

      {/* Showcase Link */}
      <div className="input-wrapper">
        <label htmlFor="showcase-input" className="showcase-label fading-label">
          Public link to showcases (Portfolio, Github, etc.) (optional)
        </label>
        <input
          type="url"
          id="showcase-input"
          name="showcase"
          placeholder="Public link to showcases (Portfolio, Github, etc.) (optional)"
          value={showcase}
          onChange={(e) => setShowcase(e.target.value)}
        />
      </div>

      {/* Optional Survey Input */}
      <div className="input-wrapper">
        <label htmlFor="optionalSurvey-input" className={`optionalSurvey-label fading-label ${errors.source ? "error" : ""}`}>
          How did you learn about Digital Product School?
        </label>
        <input
          type="text"
          id="optionalSurvey-input"
          name="optionalSurvey"
          placeholder="How did you learn about Digital Product School?"
          required
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className={errors.source ? "missingData" : ""}
        />
        {errors.source && <div className="missingData">{errors.source}</div>}
      </div>

      {/* Consent Checkbox */}
      <div className="input-wrapper consent-wrapper">
        <fieldset name="consent">
          <legend>Declaration of consent</legend>
          <div className="consent-input">
            <input
              type="checkbox"
              id="consent-true"
              name="consent"
              checked={consentChecked}
              onChange={(e) => setConsentChecked(e.target.checked)}
            />
            <label htmlFor="consent-true">
              <span>
                I agree with the processing of my personal data provided above for the
                purpose of my application as described in the{" "}
                <a
                  href="https://www.digitalproductschool.io/privacy-policy-dps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>
                . The data collected through this application form will be deleted at least twelve months after the
                beginning of the batch you applied for.
              </span>
            </label>
          </div>
          {errors.consent && <div className="missingData">{errors.consent}</div>}
        </fieldset>
      </div>

      {/* Submit Button */}
      <div className="btnWrap">
        <button
          id="btnSubmit"
          type="submit"
          className="submitBtn"
          disabled={submitting}
          style={{ cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.5 : 1 }}
          aria-label="Submit application form"
        >
          {/* The original used image background, no text shown */}
        </button>
      </div>
    </form>
   
  );
}
