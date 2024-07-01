import { SESClient } from "@aws-sdk/client-ses";

const REGION = process.env.AWS_S3_REGION;
const AWS_S3_ACCESS_KEY_ID = process.env.AWS_S3_ACCESS_KEY_ID;
const AWS_S3_SECRET_ACCESS_KEY = process.env.AWS_S3_SECRET_ACCESS_KEY;

const sesClient = new SESClient({
  region: REGION,
  credentials: {
    accessKeyId: AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: AWS_S3_SECRET_ACCESS_KEY
  }
});

export { sesClient };
///changegit