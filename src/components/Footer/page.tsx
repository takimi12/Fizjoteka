import Link from "next/link";
import styles from "./Footer.module.scss";
import instagramIcon from "../../../public/assets/Header/Instagram.svg";
import facebookIcon from "../../../public/assets/Header/Facebook.svg";
import tikTokIcon from "../../../public/assets/Header/TikTok.svg";
import youtubeIcon from "../../../public/assets/Header/youtube.svg";
import login from "../../../public/assets/Footer/Login.svg";
import Image from "next/image";
import check from "../../../public/assets/Footer/Checkin.svg";

const Footer = () => {
	return (
		<>
			<div className={` ${styles.newsletter} flex flex-col items-center`}>
				<div className={`Container ${styles.newsletterContainer}`}>
					<h2 className={` ${styles.mainHeading}`}>Nadal masz wątpliwości?</h2>
				</div>

				<div className={` ${styles.container} Container `}>
					<div className={`${styles.left} flex flex-col `}>
						<div className={`${styles.top} flex items-center gap-3`}>
							<Image src={check} width={50} height={50} alt="logo" />
							<h3>Wszystkie produkty objęte są gwarancją jakości.</h3>
						</div>
						<div className={`${styles.bottom} flex flex-col`}>
							<p>Jestem pewna jakości opracowanych przeze mnie materiałów.</p>
							<p>
								Jeśli jednak po zakupie nie spełnią one Twoich indywidualnych oczekiwań wystarczy,
								że napiszesz do mnie a otrzymasz zwrot pieniędzy.
							</p>
							<p>
								Możesz również zacząć od darmowego pierwszego rozdziału e-booka. Wypełnij formularz
								zapisu na newsletter, a wyślę go na podany adres mailowy.
							</p>
							<p>
								Masz pytanie dotyczące oferty? Koniecznie napisz do mnie maila lub wiadomość na
								Facebooku.
							</p>
						</div>
					</div>
					<div className={`${styles.right}`}>
						<div className={`${styles.form} flex flex-col gap-3`}>
							<p>
								Zapisz się na newsletter a otrzymasz w prezencie kalendarz rozwoju dziecka w
								pierwszym roku życia
							</p>
							<form >
								<div>
									<div className={` ${styles.inputWraper}`}>
										<fieldset>
											<label htmlFor="FirstName">
												Imię{" "}
												<input
													className={styles.input}
													type="text"
													required
													name="FirstName"
													id="FirstName"
													value=""
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
													value=""
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
									<button aria-busy="false" >
										CHCĘ OTRZYMAĆ KALENDARZ
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<footer className={` ${styles.footer}`}>
				<div className={` ${styles.container} Container`}>
					<div className={` flex flex-col justify-center`}>
						<span>mgr Magdalena Adaś</span>
						<span>magdalena.adas@gmail.com</span>
					</div>
					<div className={` flex flex-col justify-center`}>
						<Link href="">Polityka prywatności</Link>
						<Link href="">Regulamin sklepu</Link>
					</div>

					<div className={`${styles.icons}  `}>
						<Link href="/login">
							<Image src={login} width={25} height={25} alt="login" />
						</Link>
						<Link href="/login">
							<Image src={facebookIcon} width={25} height={25} alt="login" />
						</Link>
						<Link href="/login">
							<Image src={instagramIcon} width={25} height={25} alt="login" />
						</Link>
						<Link href="/login">
							<Image src={youtubeIcon} width={25} height={25} alt="login" />
						</Link>
						<Link href="/login">
							<Image src={tikTokIcon} width={25} height={25} alt="login" />
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
