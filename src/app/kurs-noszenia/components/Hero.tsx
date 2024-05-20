import Image from "next/image";
import styles from "./Hero.module.scss";
import Breadcrumbs from "@/components/breadcrumbs/page";
import Photo from "../../../../public/assets/Kurs-Noszenia/noszenie_maluszka.webp";
import Link from "next/link";

function Hero() {
	return (
		<>
			<Breadcrumbs />
			<section className={`${styles.Ebook} d-flex flex-center`}>
				<div className={`Container m-auto`}>
					<div className={`${styles.bottomSection} flex  items-center`}>
						<div className="Inner flex items-center">
							<div className={`${styles.leftSection} flex w-full flex-col justify-center gap-3`}>
								<div className={`${styles.text} flex flex-col gap-3`}>
									<h2>Noszenie i pielęgnacja maluszka</h2>

									<p>Kurs dla rodzica • Nagrania wideo • Spotkanie online</p>
									<p>
										Pigułka wiedzy medycznej i doświadczenia pracy z małymi pacjentami. Nauczysz
										się, jak dbać o twoje maleństwo bez stresu i wychodzenia z domu.
									</p>
								</div>
								<div className={`flex gap-7`}>
									<div className={`${styles.button}`}>
										<Link href="/filmy-i-ebooki/asymetria-ulozeniowa">
											<button className="secondaryButton">Czytaj więcej</button>
										</Link>
									</div>

									<div className={`${styles.button}`}>
										<Link href="/filmy-i-ebooki/asymetria-ulozeniowa">
											<button className="Button_button__6pObN">Zobacz ofertę</button>
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
