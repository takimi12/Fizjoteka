
import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY!,
  }
});

async function uploadFileToS3(file, fileName, contentType) {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${fileName}`,
    Body: file,
    ContentType: contentType
  };


  const command = new PutObjectCommand(params);
  const responseFromAws=await s3Client.send(command);

  const getObjectCommand = new GetObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${fileName}`,
  });

  const url=await getSignedUrl(s3Client, getObjectCommand)
  return url.split("?")[0];
}






export async function POST(request:NextRequest) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get("image");
    const pdfFile = formData.get("pdf");

    if (!imageFile || !pdfFile) {
      return NextResponse.json({ error: "Both image and PDF files are required." }, { status: 400 });
    }

    const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
    const pdfBuffer = Buffer.from(await pdfFile.arrayBuffer());

    try{
      const imageUrl = await uploadFileToS3(imageBuffer, imageFile.name, imageFile.type);
      const pdfUrl = await uploadFileToS3(pdfBuffer, pdfFile.name, pdfFile.type);
      return NextResponse.json({ success: true, imageUrl, pdfUrl });
    }catch(err){
      console.log("err",err)
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

