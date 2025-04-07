export default async function handler(req, res) {
  const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = process.env;

  if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REST_REDIS_TOKEN) {
    return res.status(500).json({ error: "Variáveis de ambiente não configuradas" });
  }

  const key = "click_count";

  if (req.method === "POST") {
    const response = await fetch(`${UPSTASH_REDIS_REST_URL}/incr/${key}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return res.status(200).json({ count: data.result });
  }

  if (req.method === "GET") {
    const response = await fetch(`${UPSTASH_REDIS_REST_URL}/get/${key}`, {
      headers: {
        Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
      },
    });
    const data = await response.json();
    return res.status(200).json({ count: Number(data.result || 0) });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}