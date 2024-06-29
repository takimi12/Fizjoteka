import Image from "next/image";
import styles from "./Hero.module.scss";
import Breadcrumbs from "@/components/breadcrumbs/page";
import Photo from "../../../../../../../public/assets/Kurs-Noszenia/noszenie_maluszka.webp";
import Link from "next/link";

function Hero() {
	return (
		<>
			<Breadcrumbs />
			<section className={`${styles.Hero} d-flex `}>
				<div className={`Container m-auto`}>
					<div className={`${styles.bottomSection} flex  `}>
						<div className={` ${styles.Inner} flex `}>
							<div className={`${styles.leftSection} flex w-full flex-col  gap-3`}>
								<div className={`${styles.text} flex flex-col gap-3 mt-10`}>
									<h2>Asymetria ułożeniowa - poradnik dla rodzica</h2>

									<p className={` ${styles.paragraph}`}>E-book • Wideo z ćwiczeniami • Spotkanie online</p>
									<p>
									Pigułka wiedzy medycznej i doświadczenia pracy z małymi pacjentami. Stan się bardziej świadomym i spokojniejszym rodzicem bez wychodzenia z domu.
									</p>
								</div>
								<div className={`flex gap-7`}>
									<div className={`${styles.button}`}>
										<Link href="#info">
											<button className={`secondaryButton`}>Czytaj więcej</button>
										</Link>
									</div>

									<div className={`${styles.button}`}>
										<Link href="#products">
											<button className={`Button_button__6pObN`}>Zobacz ofertę</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.rightSection} w-full`}>
							<div className={`${styles.image} flex justify-center`}>
								<Image src={Photo} alt="moj pierwszy ebook" width={361} height={322} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
