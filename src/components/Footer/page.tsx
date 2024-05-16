import Link from 'next/link';
import styles from './Footer.module.scss'
import instagramIcon from '../../../public/assets/Header/Instagram.svg';
import facebookIcon from '../../../public/assets/Header/Facebook.svg';
import tikTokIcon from '../../../public/assets/Header/TikTok.svg';
import youtubeIcon from '../../../public/assets/Header/youtube.svg';
import login from "../../../public/assets/Footer/Login.svg";
import Image from 'next/image';
import check from "../../../public/assets/Footer/Checkin.svg";

const Footer = () => {
  return (
    <>
<section className={` ${styles.newsletter} flex-col flex items-center`} >
<div className='Container flex justify-center'>
    <h2>Nadal masz wątpliwości?</h2>
</div>

    <div className={` ${styles.container} Container flex`}>
        <div className={`${styles.left} flex flex-col `}>
            <div className={`${styles.top} flex gap-3 items-center`}>
                <Image src={check} width={50} height={50} alt="logo" />
                <h4>Wszystkie produkty objęte są gwarancją jakości.</h4>
            </div>
            <div className={`${styles.bottom} flex flex-col`}>
                <p>Jestem pewna jakości opracowanych przeze mnie materiałów.</p>
                <p>Jeśli jednak po zakupie nie spełnią one Twoich indywidualnych oczekiwań wystarczy, że napiszesz do mnie a otrzymasz zwrot pieniędzy.</p>
                <p>Możesz również zacząć od darmowego pierwszego rozdziału e-booka. Wypełnij formularz zapisu na newsletter, a wyślę go na podany adres mailowy.</p>
                <p>Masz pytanie dotyczące oferty? Koniecznie napisz do mnie maila lub wiadomość na Facebooku.</p>
                </div>    
        </div>
        <div className={`${styles.right}`}>
            <div className={`${styles.form} flex flex-col gap-3`}>
            <b>Zapisz się na newsletter a otrzymasz w prezencie kalendarz rozwoju dziecka w pierwszym roku życia</b>
            <form className="Form_form__R_hA7">
  <div>
    <div className={styles.inputWraper}>
      <fieldset>
        <label className="" htmlFor="FirstName">Imię <input className={styles.input} type="text" required name="FirstName" id="FirstName" value="" />
          <span></span>
        </label>
      </fieldset>
    </div>
    <div className={styles.inputWraper}>
      <fieldset>
        <label className="" htmlFor="Email">Adres email <input className={styles.input} type="email" required name="Email" id="Email" value=""/>
          <span></span>
        </label>
      </fieldset>
    </div>
    <div className={styles.inputWraper}>
        <fieldset>
            <label  htmlFor="AcceptRegulations">
                <input className={styles.accept} required type="checkbox" name="AcceptRegulations" id="AcceptRegulations" />
                <span>Wyrażam zgodę na wysyłanie maili. W każdym momencie mogę wypisać się z listy mailingowej.</span>
            </label>
        </fieldset>
    </div>
    <button aria-busy="false" className="Button_button__6pObN">CHCĘ OTRZYMAĆ KALENDARZ</button>
  </div>
</form>

            
            </div>


            
        </div>
    </div>
</section>

<footer className={styles.footer}>
    <div className={` ${styles.container} Container`}>
    <div className={` flex justify-center flex-col`}>
        <span>mgr Magdalena Adaś</span>
        <span>magdalena.adas@gmail.com</span></div>
        <div className={` flex justify-center flex-col`}>
    <Link href="" >Polityka prywatności</Link>
    <Link href="" >Regulamin sklepu</Link>
    </div>


    <div className={`${styles.icons} flex items-center gap-10 flex-row  justify-center`}>
    <Link href="/login">
        <Image
        src={login}
        width={25}
        height={25}
        alt='login'
         />
    </Link>
    <Link href="/login">
        <Image
        src={facebookIcon}
        width={25}
        height={25}
        alt='login'
         />
    </Link>
    <Link href="/login">
        <Image
        src={instagramIcon}
        width={25}
        height={25}
        alt='login'
         />
    </Link>
    <Link href="/login">
        <Image
        src={youtubeIcon}
        width={25}
        height={25}
        alt='login'
         />
    </Link>
    <Link href="/login">
        <Image
        src={tikTokIcon}
        width={25}
        height={25}
        alt='login'
         />
    </Link>

    </div>
</div>
</footer>
</>
  );
};

export default Footer;
