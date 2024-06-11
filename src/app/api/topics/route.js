import connectMongoDB from "../../../../backend/config/dbDataconnect";
import Topic from "../../../../backend/models/data";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, imageFileUrl, pdfFileUrl } = await request.json();
  console.log("test", { title, description, imageFileUrl, pdfFileUrl })
  try{
    await connectMongoDB();
    await Topic.create({ title, description, imageFileUrl, pdfFileUrl });
  }catch(err){
    console.log(err)
  }
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}