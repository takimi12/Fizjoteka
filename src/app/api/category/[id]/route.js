import connectMongoDB from "../../../../../backend/config/dbDataconnect";
import Categorylist from "../../../../../backend/models/category";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newSubtitle1:subtitle1,newSubtitle2:subtitle2, newSubtitle3:subtitle3, newDescription: description, newPrice:price, newCategory:category, imageFileUrl   } = await request.json();
  await connectMongoDB();
  await Categorylist.findByIdAndUpdate(id, { title,subtitle1,subtitle2, subtitle3, description,price,category, imageFileUrl   });
  return NextResponse.json({ message: "Topic updadted" }, { status: 200 });
}


export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const categories = await Categorylist.findOne({ _id: id });
  return NextResponse.json({ categories }, { status: 200 });
}