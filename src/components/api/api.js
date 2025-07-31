// src/api/api.js

export async function fetchBatches() {
  // Replace with your real API in production
  const resp = await fetch("/api/raw/batches");
  return resp.json();
}

export async function fetchTracks() {
  const resp = await fetch("/api/raw/tracks");
  return resp.json();
}
