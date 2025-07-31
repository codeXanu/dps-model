// src/api/api.js
const API_BASE = import.meta.env.VITE_API_BASE;
export async function fetchBatches() {
   

  const resp = await fetch(`${API_BASE}/raw/batches`)
  // Replace with your real API in production
  // const resp = await fetch("/api/raw/batches");
  return resp.json();
}

export async function fetchTracks() {
  

// Then use:
const resp = await fetch(`${API_BASE}/raw/tracks`)
  // const resp = await fetch("/api/raw/tracks");
  return resp.json();
}
