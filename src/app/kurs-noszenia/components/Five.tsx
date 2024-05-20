import Image from "next/image";
import Photo from "../../../../public/assets/HomePage/Fizquizz/fizquiz.webp";
import styles from "./Five.module.scss";
import Link from "next/link";

async function Five() {
	return (
		<>
			<section className={`${styles.Ebook} d-flex flex-center`}>
				<div className={`Container m-auto`}>
					<div className={`${styles.topSection} flex flex-col items-center`}>
						<h2>Cześć!</h2>
						<p>Nazywam sie Magdalena Adas</p>
					</div>
					<div className={`${styles.bottomSection} flex  items-center`}>
						<div className="Inner flex items-center gap-10">
							<div className={`${styles.leftSection} w-full`}>
								<div className={`${styles.image} flex justify-center`}>
									<Image src={Photo} alt="moj pierwszy ebook" width={361} height={322} />
								</div>
							</div>
							<div className={`${styles.rightSection} flex w-full flex-col justify-center gap-3`}>
								<div className={`${styles.text} flex flex-col gap-3`}>
									<h6>Jestem fizjoterapeutką dziecięcą i edukatorką.</h6>
									<p>
										Ukończyłam Collegium Medicum Uniwersytetu Jagiellońskiego w Krakowie. Aktualnie
										pracuję w Krakowie i w Warszawie.
									</p>
									<p>
										Na co dzień zajmuję się rehabilitacją najmłodszych pacjentów oraz wspieraniem
										ich rodziców.
									</p>
									<p>
										Swoją wiedzą i doświadczeniem dzielę się na blogu, w kursach online, e-bookach
										oraz na webinarach. Sprawiam, że fizjoterapia jest dostępna dla każdego.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Five;
