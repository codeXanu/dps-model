// src/api/api.js

export async function fetchBatches() {
  const API_BASE =
  import.meta.env.MODE === 'development'
    ? '/api'
    : 'https://recruitinator.dpschool.io/api'
  const resp = await fetch(`${API_BASE}/raw/batches`)  
  // Replace with your real API in production
  // const resp = await fetch("/api/raw/batches");
  return resp.json();
}

export async function fetchTracks() {
  const API_BASE =
  import.meta.env.MODE === 'development'
    ? '/api'
    : 'https://recruitinator.dpschool.io/api'

// Then use:
const resp = await fetch(`${API_BASE}/raw/tracks`)
  // const resp = await fetch("/api/raw/tracks");
  return resp.json();
}
