import connectMongoDB from "../../../../backend/config/dbDataconnect";
import Categorylist from "../../../../backend/models/category";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title,  subtitle1,subtitle2,subtitle3,price, description,category, imageFileUrl } = await request.json();
  try{
    await connectMongoDB();
    await Categorylist.create({ title,  subtitle1,subtitle2,subtitle3,price,description,category, imageFileUrl });
  }catch(err){
    console.log(err)
  }
  return NextResponse.json({ message: "Category Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const categories = await Categorylist.find();
  return NextResponse.json({ categories });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Categorylist.findByIdAndDelete(id);
  return NextResponse.json({ message: "Category deleted" }, { status: 200 });
}
