import axios from "axios";

export default async function handler(req, res) {
  try {
    console.log("🔥 CRON HIT", new Date().toISOString());

    // ✅ Vercel cron authentication
    if (!req.headers["x-vercel-cron"]) {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }

    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const backendUrl = process.env.BACKEND_URL;

    if (!backendUrl) {
      throw new Error("BACKEND_URL is missing");
    }

    const backendRes = await axios.get(
      `${backendUrl}/api/cron/daily-reminder`
    );

    return res.status(200).json({
      success: true,
      message: backendRes.data.message,
    });

  } catch (err) {
    console.error("❌ CRON ERROR:", err.message);
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}
