export default async function handler(req, res) {
  const { endpoint } = req.query;

  try {
    const url = `https://recruitinator.dpschool.io/api/raw/${endpoint}`;
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch from DPS API" });
    }

    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
