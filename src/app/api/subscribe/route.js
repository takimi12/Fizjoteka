// // pages/api/subscribe.js



// import AWS from 'aws-sdk';

// const AWS_S3_REGION = process.env.AWS_S3_REGION;
// const AWS_S3_ACCESS_KEY_ID = process.env.AWS_S3_ACCESS_KEY_ID;
// const AWS_S3_SECRET_ACCESS_KEY = process.env.AWS_S3_SECRET_ACCESS_KEY;




// AWS.config.update({ region: AWS_S3_REGION });

// const ses = new AWS.SES();
// const s3 = new AWS.S3();

// const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
// const OBJECT_NAME = 'https://raddys-web-storage1.s3.eu-north-1.amazonaws.com/157.pdf';

// const generatePresignedUrl = (bucketName, objectName, expiration = 3600) => {
//   return s3.getSignedUrlPromise('getObject', {
//     Bucket: bucketName,
//     Key: objectName,
//     Expires: expiration,
//   });
// };

// const sendEmail = async (recipientEmail, downloadUrl) => {
//   const params = {
//     Source: 'Your Name <your-email@example.com>',
//     Destination: {
//       ToAddresses: [recipientEmail],
//     },
//     Message: {
//       Subject: {
//         Data: 'Download Your File',
//       },
//       Body: {
//         Text: {
//           Data: `Hello,\n\nThank you for subscribing to our newsletter. Please download your file using the link below:\n${downloadUrl}\n\nBest regards,\nYour Company`,
//         },
//       },
//     },
//   };

//   return ses.sendEmail(params).promise();
// };

// export default async (req, res) => {
//   if (req.method === 'POST') {
//     const { email } = req.body;

//     try {
//       const downloadUrl = await generatePresignedUrl(BUCKET_NAME, OBJECT_NAME);
//       await sendEmail(email, downloadUrl);
//       res.status(200).json({ message: 'Subscription successful! Check your email for the download link.' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Subscription failed. Please try again later.' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// };
import AWS from 'aws-sdk';

const AWS_S3_REGION = process.env.AWS_S3_REGION;
const AWS_S3_ACCESS_KEY_ID = process.env.AWS_S3_ACCESS_KEY_ID;
const AWS_S3_SECRET_ACCESS_KEY = process.env.AWS_S3_SECRET_ACCESS_KEY;
const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
const OBJECT_NAME = 'https://raddys-web-storage1.s3.eu-north-1.amazonaws.com/157.pdf';

// Konfiguracja AWS
AWS.config.update({ 
  region: AWS_S3_REGION,
  accessKeyId: AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: AWS_S3_SECRET_ACCESS_KEY
});

const ses = new AWS.SES();
const s3 = new AWS.S3();

const generatePresignedUrl = (bucketName, objectName, expiration = 3600) => {
  return s3.getSignedUrlPromise('getObject', {
    Bucket: bucketName,
    Key: objectName,
    Expires: expiration,
  });
};

const sendEmail = async (recipientEmail, downloadUrl) => {
  const params = {
    Source: 'Your Name <your-email@example.com>',
    Destination: {
      ToAddresses: [recipientEmail],
    },
    Message: {
      Subject: {
        Data: 'Download Your File',
      },
      Body: {
        Text: {
          Data: `Hello,\n\nThank you for subscribing to our newsletter. Please download your file using the link below:\n${downloadUrl}\n\nBest regards,\nYour Company`,
        },
      },
    },
  };

  return ses.sendEmail(params).promise();
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    const downloadUrl = await generatePresignedUrl(AWS_S3_BUCKET_NAME, OBJECT_NAME);
    await sendEmail(email, downloadUrl);

    return new Response(JSON.stringify({ message: 'Subscription successful! Check your email for the download link.' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Subscription failed. Please try again later.' }), { status: 500 });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: 'Method not allowed' }), { status: 405 });
}
