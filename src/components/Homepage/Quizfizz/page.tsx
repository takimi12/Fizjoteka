import Image from "next/image";
import Photo from "../../../../public/assets/HomePage/Fizquizz/fizquiz.webp";
import styles from "./Quizfizz.module.scss";
import Link from "next/link";

async function Hero() {
	return (
		<>
			<section className={`${styles.Quiz} d-flex flex-center`}>
				<div className={`Container m-auto`}>
					<div className={`${styles.topSection} flex flex-col `}>
						<h2>FizQuiz Asymetria</h2>
					</div>
					<div className={`${styles.bottomSection} flex  items-center`}>
						<div className={`Inner flex items-center`}>
							<div className={`${styles.leftSection} flex w-full flex-col justify-center gap-3`}>
								<div className={`${styles.text} flex flex-col gap-5`}>
									<p>
										Asymetria ułożeniowa to jedno z najczęstszych schorzeń u niemowląt. Rodzice
										często jednak nie wiedzą dużo na jej temat.
									</p>
									<p>
										Jeśli Ty masz wątpliwości, czy Twoje dziecko może mieć asymetrię sprawdź
										koniecznie mój FizQuiz.
									</p>
								</div>
								<div className={`${styles.button}`}>
									<Link href="/fizzquiz">
										<button className={``}>Przejdź quiz</button>
									</Link>
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
