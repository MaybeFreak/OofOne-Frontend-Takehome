import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  console.log(data);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch("http://127.0.0.1:8090/api/collections/Feedback/records", options);
  return NextResponse.json({});
}
