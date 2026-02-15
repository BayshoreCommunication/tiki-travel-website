import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const MailchimpKey = process.env.MAILCHIMP_API_KEY;
    const MailchimpServer = process.env.MAILCHIMP_API_SERVER;
    const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!MailchimpKey || !MailchimpServer || !MailchimpAudience) {
      throw new Error("Missing Mailchimp environment variables");
    }

    const customUrl = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;

    const response = await fetch(customUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${MailchimpKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.detail || "Failed to subscribe" },
        { status: response.status },
      );
    }

    const received = await response.json();
    return NextResponse.json(received);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error!!!" },
      { status: 500 },
    );
  }
}
// import axios from "axios";
//
// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { email } = req.body;
//
//     if (!email) {
//       return res.status(400).json({ message: "Email is required." });
//     }
//
//     try {
//       const apiKey = process.env.MAILCHIMP_API_KEY;
//       const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
//       const serverPrefix = apiKey.split("-")[1]; // e.g., "us1"
//       const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;
//
//       const response = await axios.post(
//         url,
//         {
//           email_address: email,
//           status: "subscribed",
//         },
//         {
//           headers: {
//             Authorization: `apikey ${apiKey}`,
//             "Content-Type": "application/json",
//           },
//         },
//       );
//
//       res.status(200).json({ message: "Successfully subscribed!" });
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "Error subscribing. Please try again later." });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
