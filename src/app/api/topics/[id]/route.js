import connectMongoDB from "../../../../../backend/config/dbDataconnect";
import Topic from "../../../../../backend/models/data";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newSubtitle:subtitle, newDescription: description, newPrice:price, newCategory:category, imageFileUrl  } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title,subtitle, description,price,category, imageFileUrl  });
  return NextResponse.json({ message: "Topic updadted" }, { status: 200 });
}


export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
