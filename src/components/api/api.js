// src/api/api.js

export async function fetchBatches() {
   

  const resp = await fetch('/api/proxy?endpoint=batches')
  // Replace with your real API in production
  // const resp = await fetch("/api/raw/batches");
  return resp.json();
}

export async function fetchTracks() {
  

// Then use:
const resp = await fetch('/api/proxy?endpoint=tracks')
  // const resp = await fetch("/api/raw/tracks");
  return resp.json();
}
