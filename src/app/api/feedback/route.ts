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
  fetch("http://localhost:4000/answers", options);
  return NextResponse.json({});
}
