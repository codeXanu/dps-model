export async function fetchBatches() {
   

    const resp = await fetch('/api/proxy?endpoint=batches')
    if (!resp.ok) throw new Error('Failed to fetch batches')
  // Replace with your real API in production
  // const resp = await fetch("/api/raw/batches");
  return await resp.json();
}

export async function fetchTracks() {
  
// Then use:
const resp = await fetch('/api/proxy?endpoint=tracks')
if (!resp.ok) throw new Error('Failed to fetch tracks')
  // const resp = await fetch("/api/raw/tracks");
  return await resp.json();
}