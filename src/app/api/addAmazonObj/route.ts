
// import { NextRequest, NextResponse } from "next/server";
// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// import { GetObjectCommand } from "@aws-sdk/client-s3";
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// const s3Client = new S3Client({
//   region: process.env.AWS_S3_REGION!,
//   credentials: {
//     accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID!,
//     secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY!,
//   }
// });

// async function uploadFileToS3(file, fileName, contentType) {
//   const params = {
//     Bucket: process.env.AWS_S3_BUCKET_NAME,
//     Key: `${fileName}`,
//     Body: file,
//     ContentType: contentType
//   };


//   const command = new PutObjectCommand(params);
//   const responseFromAws=await s3Client.send(command);

//   const getObjectCommand = new GetObjectCommand({
//     Bucket: process.env.AWS_S3_BUCKET_NAME,
//     Key: `${fileName}`,
//   });

//   const url=await getSignedUrl(s3Client, getObjectCommand)
//   return url.split("?")[0];
// }

// export async function POST(request:NextRequest) {
//   try {
//     const formData = await request.formData();
//     const file = formData.get("file");

//     if (!file) {
//       return NextResponse.json({ error: "File is required." }, { status: 400 });
//     }

//     const fileBuffer = Buffer.from(await file.arrayBuffer());

//     try{
//       const fileUrl = await uploadFileToS3(fileBuffer, file.name, file.type);
//       return NextResponse.json({ success: true, fileUrl });
//     }catch(err){
//       console.log("err",err)
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//   } catch (error) {
//     console.error("Upload error:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// import { GetObjectCommand } from "@aws-sdk/client-s3";
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// const s3Client = new S3Client({
//   region: process.env.AWS_S3_REGION!,
//   credentials: {
//     accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID!,
//     secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY!,
//   }
// });

// async function uploadFileToS3(file: Buffer, fileName: string, contentType: string): Promise<string> {
//   const params = {
//     Bucket: process.env.AWS_S3_BUCKET_NAME!,
//     Key: fileName,
//     Body: file,
//     ContentType: contentType
//   };

//   const command = new PutObjectCommand(params);
//   await s3Client.send(command);

//   const getObjectCommand = new GetObjectCommand({
//     Bucket: process.env.AWS_S3_BUCKET_NAME!,
//     Key: fileName,
//   });

//   const url = await getSignedUrl(s3Client, getObjectCommand);
//   return url.split("?")[0];
// }

// export async function POST(request: NextRequest) {
//   try {
//     const formData = await request.formData();
//     const file = formData.get("file");

//     if (!file) {
//       return NextResponse.json({ error: "File is required." }, { status: 400 });
//     }

//     const fileBuffer = Buffer.from(await file.arrayBuffer());

//     try {
//       const fileUrl = await uploadFileToS3(fileBuffer, file.name, file.type || '');
//       return NextResponse.json({ success: true, fileUrl });
//     } catch (error) {
//       console.log("err", error);
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//   } catch (error) {
//     console.error("Upload error:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// import { GetObjectCommand } from "@aws-sdk/client-s3";
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// const s3Client = new S3Client({
//   region: process.env.AWS_S3_REGION!,
//   credentials: {
//     accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID!,
//     secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY!,
//   }
// });

// async function uploadFileToS3(file: Buffer, fileName: string, contentType: string): Promise<string> {
//   const params = {
//     Bucket: process.env.AWS_S3_BUCKET_NAME!,
//     Key: fileName,
//     Body: file,
//     ContentType: contentType
//   };

//   const command = new PutObjectCommand(params);
//   await s3Client.send(command);

//   const getObjectCommand = new GetObjectCommand({
//     Bucket: process.env.AWS_S3_BUCKET_NAME!,
//     Key: fileName,
//   });

//   const url = await getSignedUrl(s3Client, getObjectCommand);
//   return url.split("?")[0];
// }

// export async function POST(request: NextRequest) {
//   try {
//     const formData = await request.formData();
//     const file = formData.get("file");

//     if (!file) {
//       return NextResponse.json({ error: "File is required." }, { status: 400 });
//     }

//     if (!(file instanceof Blob)) {
//       return NextResponse.json({ error: "Invalid file format." }, { status: 400 });
//     }

//     const arrayBuffer = await file.arrayBuffer();
//     const fileBuffer = Buffer.from(arrayBuffer);

//     try {
//       const fileUrl = await uploadFileToS3(fileBuffer, file.name, file.type || '');
//       return NextResponse.json({ success: true, fileUrl });
//     } catch (error) {
//       console.log("err", error);
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//   } catch (error) {
//     console.error("Upload error:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
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

async function uploadFileToS3(file: Buffer, fileName: string, contentType: string): Promise<string> {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: fileName,
    Body: file,
    ContentType: contentType
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  const getObjectCommand = new GetObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: fileName,
  });

  const url = await getSignedUrl(s3Client, getObjectCommand);
  return url.split("?")[0];
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }

    if (!(file instanceof Blob)) {
      return NextResponse.json({ error: "Invalid file format." }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    try {
      const fileUrl = await uploadFileToS3(fileBuffer, file.name, file.type || '');
      return NextResponse.json({ success: true, fileUrl });
    } catch (error: any) { // Określenie typu błędu jako any
      console.log("err", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

  } catch (error: any) { // Określenie typu błędu jako any
    console.error("Upload error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
