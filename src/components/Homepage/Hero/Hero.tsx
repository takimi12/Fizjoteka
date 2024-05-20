import Image from "next/image";
import Photo from "../../../../public/assets/HomePage/Hero/helloSection_magda.webp";
import styles from "./Hero.module.scss";

function Hero() {
	return (
		<section className={styles.Hero}>
			<div className="Container">
				<div className={styles.Inner}>
					<div className={styles.leftSection}>
						<div className={styles.title}>
							<h1 className={` ${styles.main}`}>Cześć, jestem Magda!</h1>
						</div>
						<p className={styles.paragraph}>
							Jestem fizjoterapeutką dziecięcą i edukatorką. E-fizjoteka to moje miejsce w sieci.
							Dzielę się tu wiedzą fizjoterapeutyczną i uczę rodziców prawidłowej pielęgnacji dzieci
							oraz metod wspierania ich zdrowego rozwoju.
						</p>
					</div>
					<div className={styles.rightSection}>
						<Image
							src={Photo}
							width={408}
							height={404}
							alt="Zdjęcie Magdy, autorki bloga"
							aria-label="Zdjęcie Magdy, autorki bloga"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
