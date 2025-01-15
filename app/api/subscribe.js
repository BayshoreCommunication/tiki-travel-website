import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    try {
      const apiKey = process.env.MAILCHIMP_API_KEY;
      const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
      const serverPrefix = apiKey.split("-")[1]; // e.g., "us1"
      const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

      const response = await axios.post(
        url,
        {
          email_address: email,
          status: "subscribed",
        },
        {
          headers: {
            Authorization: `apikey ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      res.status(200).json({ message: "Successfully subscribed!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error subscribing. Please try again later." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
