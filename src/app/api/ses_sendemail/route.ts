// import { SendEmailCommand } from "@aws-sdk/client-ses";
// import { sesClient } from "../../../../libs/sesClient";

// interface EmailParams {
//   Source: string;
//   Destination: {
//     ToAddresses: string[];
//   };
//   Message: {
//     Subject: { Data: string };
//     Body: { Html: { Data: string } };
//   };
// }



// const sendEmail = async (params: EmailParams): Promise<void> => { 
//   return new Promise((resolve, reject) => {
//     sesClient.send(new SendEmailCommand (params), (err:any, data:any) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve();
//       }
//     });
//   });
// };

// export {sendEmail};

import { NextRequest, NextResponse } from 'next/server';
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "../../../../libs/sesClient";

interface EmailParams {
  Source: string;
  Destination: {
    ToAddresses: string[];
  };
  Message: {
    Subject: { Data: string };
    Body: { Html: { Data: string } };
  };
}

const sendEmail = async (params: EmailParams): Promise<void> => {
  return new Promise((resolve, reject) => {
    sesClient.send(new SendEmailCommand(params), (err: any, data: any) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { Source, Destination, Message } = body;

    const params: EmailParams = {
      Source,
      Destination,
      Message
    };

    await sendEmail(params);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
