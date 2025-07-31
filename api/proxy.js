export default async function handler(req, res) {
  const { endpoint } = req.query

  if (!endpoint) {
    return res.status(400).json({ error: 'Missing endpoint' })
  }

  try {
    const apiUrl = `https://recruitinator.dpschool.io/api/raw/${endpoint}`
    const response = await fetch(apiUrl)

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Error fetching data' })
    }

    const data = await response.json()
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: 'Server error', details: error.message })
  }
}
