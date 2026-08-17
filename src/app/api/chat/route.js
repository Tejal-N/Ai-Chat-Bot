export async function POST(request) {
  try {
    const { text } = await request.json();

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", //calling
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": process.env.GEMINI_API_KEY,
        },

        //Request body: prompt is sent to api as json.
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: text,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();   //convert to json

    //Check if Gemini returned an error
    if (!response.ok) {
      console.error("Gemini API error:", data);

      return Response.json(
        {
          error: data?.error?.message || "Gemini API request failed",
        },
        { status: response.status }
      );
    }

    const answer =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    //Check if Gemini returned a response
    if (!answer) {
      console.error("Unexpected Gemini response:", data);

      return Response.json(
        {
          error: "Gemini returned no response.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      answer: answer,
    });
  } catch (error) {
    console.error("Server error:", error);

    return Response.json(
      {
        error: "Something went wrong on the server.",
      },
      { status: 500 }
    );
  }
}