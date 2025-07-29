// src/api/api.js

export async function fetchBatches() {
  // Replace with your real API in production
  const resp = await fetch("https://my-digitalschool-al87q.ondigitalocean.app/api/raw/batches");
  return resp.json();
}

export async function fetchTracks() {
  const resp = await fetch("https://my-digitalschool-al87q.ondigitalocean.app/api/raw/tracks");
  return resp.json();
}
