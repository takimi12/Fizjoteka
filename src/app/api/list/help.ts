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

export { sendEmail };

// import { sendEmail } from './help';

// export default function handler(req, res) {
//   // Wywołanie funkcji sendEmail tutaj
//   const emailParams = {
//     Source: 'nadawca@example.com',
//     Destination: {
//       ToAddresses: ['odbiorca@example.com'],
//     },
//     Message: {
//       Subject: { Data: 'Temat wiadomości' },
//       Body: { Html: { Data: '<p>Zawartość HTML wiadomości</p>' } },
//     },
//   };

//   sendEmail(emailParams)
//     .then(() => {
//       res.status(200).json({ message: 'Wiadomość e-mail została wysłana pomyślnie' });
//     })
//     .catch((error) => {
//       console.error('Błąd podczas wysyłania e-maila:', error);
//       res.status(500).json({ message: 'Błąd podczas wysyłania e-maila' });
//     });
// }
