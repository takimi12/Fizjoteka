"use client";

import { gsap } from "gsap";
import React, { FormEvent, useRef, useState } from "react";
import styles from "./Form.module.scss";

interface MembersSuccessResponse {
    email_address: string;
  }

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [names, setName] = useState("");
  const [successMessage, setSuccessMessage] =
    useState<MembersSuccessResponse>();
  const [errorMessage, setErrorMessage] = useState("");
  const [active, setActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { to, fromTo, set } = gsap;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const button = buttonRef.current;

    if (!email || !names || !button) return;

    if (!active) {
      setActive(true);
    }

    const res = await fetch("/api/addSubscription", {
      body: JSON.stringify({ email, names }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const data = await res.json();

    if (data.error) {
      setErrorMessage("Hey, you are already subscribed!");
      setSuccessMessage(undefined);
      return;
    }

    setSuccessMessage(data.res);
    setErrorMessage("");
  };

  const dismissMessages = () => {
    setSuccessMessage(undefined);
    setErrorMessage("");
  };

  return (
    <div className={`${styles.right}`}>
    <div className={`${styles.form} flex flex-col gap-3`}>
        <p>
            Zapisz się na newsletter a otrzymasz w prezencie kalendarz rozwoju dziecka w
            pierwszym roku życia
        </p>
        <div className={`${styles.popup}`}>
        {(successMessage || errorMessage) && (
          <div className={`${styles.inner}`}>
            <div className=""></div>
            <div className="">
              {successMessage ? (
                <p>
Mail z darmowym rozdziałem e-booka już leci na Twojego emaila <span className="text-[#FFFF00]">
                    {successMessage.email_address}
                  </span>{" "}.
Jeśli będziesz czekać dłużej niż kilka minut, sprawdź zakładkę spam.
                  

                </p>
              ) : (
                <p>
                  You are already added to our waitlist. We&apos;ll let you know
                  when we launch!
                </p>
              )}
            </div>
          </div>
        )}
      </div>
        <form 
                onSubmit={handleSubmit}
                className="newsletter-form  animate-fade-in-3"
        >
            <div>
                <div className={` ${styles.inputWraper}`}>
                    <fieldset>
                        <label htmlFor="FirstName">
                            Imię{" "}
                        
                               <input
                                    className={styles.input}     
value={names}
onChange={(e) => setName(e.target.value)}
placeholder="Your name"
required
type="text"
name="FirstName"
id="FirstName"
/>
                            <span></span>
                        </label>
                    </fieldset>
                </div>
                <div className={`${styles.inputWraper}`}>
                    <fieldset>
                        <label className="" htmlFor="Email">
                            Adres email{" "}
                            <input
                                className={` ${styles.input}`}
                                type="email"
                                required
                                name="Email"
                                id="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                           
                            />

                            <span></span>
                        </label>
                    </fieldset>
                </div>
                <div className={` ${styles.inputWraper}`}>
                    <fieldset>
                        <label htmlFor="AcceptRegulations">
                            <input
                                className={` ${styles.accept}`}
                                required
                                type="checkbox"
                                name="AcceptRegulations"
                                id="AcceptRegulations"
                            />
                            <span className={` ${styles.acceptSpan}`}>
                                Wyrażam zgodę na wysyłanie maili. W każdym momencie mogę wypisać się z
                                listy mailingowej.
                            </span>
                        </label>
                    </fieldset>
                </div>
                <button
ref={buttonRef}
className={`${active && "active"}`}
disabled={!email || !names}
type="submit"
>
<span className="default">CHCĘ OTRZYMAĆ KALENDARZ</span>

</button>
            </div>
        </form>
      
</div>
    </div>
    
    
  );
}

export default NewsletterForm;


