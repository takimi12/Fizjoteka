import styles from "./Help.module.scss";
import Link from "next/link";
import Button from "../../repeated/button/page";

async function Hero() {
	const data = [
		{
			title: "Blog",
			paragraph:
				"Koniecznie zajrzyj do zakładki Blog. Każdego miesiąca szuka na nim porady ponad 50 tys. osób. To najchętniej czytany blog o tej tematyce!",
			link: "blog",
		},
		{
			title: "Filmy i ebooki",
			paragraph:
				"W zakładce Filmy i e-booki znajdziesz nagrania moich najpopularniejszych webinarów oraz poradnik na temat asymetrii ułożeniowej.",
			link: "filmy-i-ebooki",
		},
		{
			title: "Konsultacje",
			paragraph:
				"Bezpośrednio pomagam pacjentom na wizytach domowych oraz online. Więcej na ten temat znajdziesz w zakładce O mnie.",
			link: "wizyta",
		},
	];

	return (
		<>
			<section className={`${styles.Help}`}>
				<div className={`Container`}>
					<div className={`${styles.topSection}`}>
						<h2>Jak mogę Ci pomóc?</h2>
						<p>
							Na e-fizjotece znajdziesz artykuły oraz filmy i e-booki z poradami fizjoterapeuty.
						</p>
					</div>
					<div className={`itemWraper`}>
						{data.map((item, index) => (
							<div key={index} className={`bottomItem`}>
								<h3>{item.title}</h3>
								<p>{item.paragraph}</p>
								<Button link={item.link} link1="" />
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
