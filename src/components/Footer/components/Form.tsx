// 'use client'
// import React, { useState } from 'react';
// import { sendEmail } from '../../../app/api/list/route';
// import styles from "./Form.module.scss";

// function NewsletterForm() {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [consent, setConsent] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [submittedEmail, setSubmittedEmail] = useState(''); // New state for submitted email



//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const mongoResponse = await fetch("http://localhost:3000/api/news", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, name }),
//       });

//       if (!mongoResponse.ok) {
//         throw new Error('Błąd podczas dodawania użytkownika do bazy danych.');
//       }

//       const link = 'https://raddys-web-storage1.s3.eu-north-1.amazonaws.com/157.pdf';

//       await sendEmail({
//         Source: 'tomek12olech@gmail.com', // Zmień na swój adres e-mail
//         Destination: { ToAddresses: [email] }, // Wysyłamy do adresu e-mail wprowadzonego przez użytkownika
//         Message: {
//           Subject: { Data: 'Przesyłamy link do pobrania poradnika' },
//           Body: { Html: { Data: `Kliknij <a href="${link}">tutaj</a> aby pobrać poradnik.` } },
//         },
//       });

//       setSuccessMessage('Dziękujemy za zapisanie się! Sprawdź swoją skrzynkę e-mail.');
//       setSubmittedEmail(email); // Save the email before resetting it
//       setEmail('');
//       setName('');
//       setConsent(false); // Reset zgody po pomyślnym przesłaniu formularza
//     } catch (error) {
//       console.error('Błąd podczas wysyłania danych:', error);
//       setErrorMessage('Wystąpił błąd podczas wysyłania danych.');
//     }
//   };

//   return (
//     <div className={styles.right}>
//       <div className={`${styles.form} flex flex-col gap-3`}>
//         <p>
//           Zapisz się na newsletter a otrzymasz w prezencie kalendarz rozwoju dziecka w
//           pierwszym roku życia
//         </p>
//         {(successMessage || errorMessage) && (
//           <div className={styles.inner}>
//             <div className="">
//               {successMessage ? (
//                 <p>
//                   Mail z darmowym rozdziałem e-booka już leci na Twojego emaila{" "}
//                   <span className="text-[#FFFF00]">{submittedEmail}</span>. {/* Use submittedEmail here */}
//                   Jeśli będziesz czekać dłużej niż kilka minut, sprawdź zakładkę spam.
//                 </p>
//               ) : (
//                 <p>{errorMessage}</p>
//               )}
//             </div>
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="newsletter-form animate-fade-in-3">
//           <div>
//             <div className={styles.inputWraper}>
//               <fieldset>
//                 <label htmlFor="FirstName">
//                   Imię{" "}
//                   <input
//                     className={styles.input}
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Twoje imię"
//                     required
//                     type="text"
//                     name="FirstName"
//                     id="FirstName"
//                   />
//                   <span></span>
//                 </label>
//               </fieldset>
//             </div>
//             <div className={styles.inputWraper}>
//               <fieldset>
//                 <label htmlFor="Email">
//                   Adres email{" "}
//                   <input
//                     className={styles.input}
//                     type="email"
//                     required
//                     name="Email"
//                     id="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Adres email"
//                   />
//                   <span></span>
//                 </label>
//               </fieldset>
//             </div>
//             <div className={styles.inputWraper}>
//               <fieldset>
//                 <label htmlFor="AcceptRegulations">
//                   <input
//                     className={styles.accept}
//                     required
//                     type="checkbox"
//                     name="AcceptRegulations"
//                     id="AcceptRegulations"
//                     checked={consent}
//                     onChange={(e) => setConsent(e.target.checked)}
//                   />
//                   <span className={styles.acceptSpan}>
//                     Wyrażam zgodę na wysyłanie maili. W każdym momencie mogę wypisać się z
//                     listy mailingowej.
//                   </span>
//                 </label>
//               </fieldset>
//             </div>
//             <button type="submit">
//               <span className="default">CHCĘ OTRZYMAĆ KALENDARZ</span>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default NewsletterForm;
