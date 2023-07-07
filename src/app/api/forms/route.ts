import { NextResponse } from "next/server";

export default async function AddForm(req: Request, res: Response) {
  const newForm = await req.json();
  console.log("New Form \n", newForm);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newForm),
  };
  fetch("http://localhost:4000/forms", options);
  return NextResponse.json({ data: "New Form was created" });
}