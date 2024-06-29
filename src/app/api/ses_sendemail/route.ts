import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "../../../../libs/sesClient.mdx";

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
    sesClient.send(new SendEmailCommand (params), (err:any, data:any) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export {sendEmail};