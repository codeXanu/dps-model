// src/api/api.js

export async function fetchBatches() {
  // Replace with your real API in production
  const resp = await fetch("http://localhost:3000/api/raw/batches");
  return resp.json();
}

export async function fetchTracks() {
  const resp = await fetch("http://localhost:3000/api/raw/tracks");
  return resp.json();
}
