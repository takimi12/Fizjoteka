"use client";
import React, { useState, useEffect } from "react";
import Breadcrumbs from "@/components/breadcrumbs/page";
import styles from "./FilmyEbooki.module.scss";
import Circle from "../../../public/assets/Filmy-i-ebooki/circle.svg";
import ProductPhoto from "../../../public/assets/Filmy-i-ebooki/c3c52257-dac2-4568-b0d9-5d261e331c46-Promocja_post Instagram (1).webp";
import Image from "next/image";
import Link from "next/link";
import Modal from "./components//Modal"; 

const products = [
	{
		id: "1",
		photo: ProductPhoto,
		title: "Zabawy dla rodzica i maluszka 0-3 miesiące",
		date: "Webinar na ZOOM - czwartek 23 maja, 19:00",
		text: "Dowiesz się: 👉 Jak bawić się z maluszkiem, by budować więź między wami. 👉Jak sprawdzić, czy prawidłowo leży na brzuszku? 👉 Jakie ćwiczenia można wprowadzać w danym wieku.👉 Jak stymulować zmysły dziecka? 👉 Jakie sprzęty warto kupić dla dziecka? Kiedy? 👉Czwartek: 23/5/2024r. godz.: 19:00 ❤️ Webinar będzie na żywo na platformie ZOOM. Oczywiście będzie zapisany i po zakupie możesz odtwarzać ponownie. ❤️ ALE dołącz na żywo - wtedy możesz zadać pytania i dowiedzieć się jeszcze więcej! ❤️ Ilość miejsc jest ograniczona do 30, dlatego spiesz się, zanim zabraknie wirtualnych krzesełek ;)",
		available: "Produkt dostępny",
		circle: Circle,
		price: "50.00",
		categories: ["Webinar"],
	},
	{
		id: "2",
		photo: ProductPhoto,
		title: "Webinar o asymetrii ułożeniowej",
		date: "Webinar na ZOOM - piątek 24 maja, 19:00",
		text: "Dowiesz się: 👉 Czym jest asymetria ułożeniowa? 👉 Jakie są jej objawy? 👉 Jak postępować, aby ją skorygować? 👉 Jakie ćwiczenia wykonywać z dzieckiem? Kiedy? 👉Piątek: 24/5/2024r. godz.: 19:00 ❤️ Webinar będzie na żywo na platformie ZOOM. Oczywiście będzie zapisany i po zakupie możesz odtwarzać ponownie. ❤️ Dołącz na żywo - wtedy możesz zadać pytania i dowiedzieć się jeszcze więcej! ❤️ Ilość miejsc jest ograniczona do 30.",
		available: "Produkt dostępny",
		circle: Circle,
		price: "40.00",
		categories: ["Asymetria ułożeniowa"],
	},
	{
		id: "3",
		photo: ProductPhoto,
		title: "Ebook o nauce noszenia",
		date: "Dostępny do pobrania natychmiast",
		text: "Dowiesz się: 👉 Jak prawidłowo nosić dziecko? 👉 Jakie są najlepsze techniki noszenia? 👉 Jakie korzyści płyną z noszenia dziecka? 👉 Jakie błędy unikać podczas noszenia? ❤️ Ebook jest dostępny do natychmiastowego pobrania po zakupie. Możesz go czytać w dowolnym momencie.",
		available: "Produkt dostępny",
		circle: Circle,
		price: "30.00",
		categories: ["Poradnik"],
	},
	{
		id: "4",
		photo: ProductPhoto,
		title: "Poradnik dla rodziców",
		date: "Dostępny do pobrania natychmiast",
		text: "Dowiesz się: 👉 Jak wspierać rozwój dziecka w różnych etapach życia? 👉 Jakie zabawy i aktywności są najlepsze dla danego wieku? 👉 Jakie są kluczowe aspekty zdrowia i bezpieczeństwa dziecka? ❤️ Poradnik jest dostępny do natychmiastowego pobrania po zakupie. Możesz go czytać w dowolnym momencie.",
		available: "Produkt dostępny",
		circle: Circle,
		price: "25.00",
		categories: ["Rozwój dziecka"],
	},
	{
		id: "5",
		photo: ProductPhoto,
		title: "Webinar: Jak prawidłowo nosić dziecko",
		date: "Webinar na ZOOM - sobota 25 maja, 19:00",
		text: "Dowiesz się: 👉 Jak prawidłowo nosić dziecko? 👉 Jakie są najlepsze techniki noszenia? 👉 Jakie są korzyści z noszenia dziecka? 👉 Jak unikać błędów podczas noszenia? Kiedy? 👉Sobota: 25/5/2024r. godz.: 19:00 ❤️ Webinar będzie na żywo na platformie ZOOM. Oczywiście będzie zapisany i po zakupie możesz odtwarzać ponownie. ❤️ Dołącz na żywo - wtedy możesz zadać pytania i dowiedzieć się jeszcze więcej! ❤️ Ilość miejsc jest ograniczona do 30.",
		available: "Produkt dostępny",
		circle: Circle,
		price: "35.00",
		categories: ["Nauka noszenia"],
	},
];

type Category = "Rozwój dziecka" | "Nauka noszenia" | "Asymetria ułożeniowa" | "Webinar" | "Poradnik";

function Hero() {
	const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [isDesktop, setIsDesktop] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleCategoryChange = (category: Category) => {
		const updatedCategories = selectedCategories.includes(category)
			? selectedCategories.filter((cat) => cat !== category)
			: [...selectedCategories, category];

		setSelectedCategories(updatedCategories);
	};

	useEffect(() => {
		if (selectedCategories.length === 0) {
			setFilteredProducts(products);
		} else {
			const filtered = products.filter((product) =>
				selectedCategories.every((category) => product.categories.includes(category)),
			);
			setFilteredProducts(filtered);
		}
	}, [selectedCategories]);

	const handleClearFilters = () => {
		setSelectedCategories([]);
		setFilteredProducts(products);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 1200);
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Set initial value

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleDateString();

	return (
		<>
			<Breadcrumbs />
						<section className={`${styles.blog} flex justify-center`}>
				<div className={`Container flex`}>
					<div className={` ${styles.wrapper}`}>
						{isDesktop ? (
							<div className={`${styles.searchSection} onlyDesktop`}>
								<div className={`${styles.filters}`}>
									<h6>Kategoria</h6>
									{[
										"Rozwój dziecka",
										"Nauka noszenia",
										"Asymetria ułożeniowa",
										"Webinar",
										"Poradnik",
									].map((category, index) => (
										<div key={index} className={` mb-7 ${styles.inputs}`}>
											<fieldset>
												<label className="" htmlFor={category}>
													<input
														type="checkbox"
														id={category}
														className={`${styles.checkbox}`}
														checked={selectedCategories.includes(category as Category)}
														onChange={() => handleCategoryChange(category as Category)}
													/>
													<span>{category}</span>
												</label>
											</fieldset>
										</div>
									))}
									<div className="">
										<button className={`Button ${styles.buttonLeft}`} onClick={() => setFilteredProducts(filteredProducts)}>
											Wyszukaj
										</button>
										<button className={` outline   ${styles.noButton}`} onClick={handleClearFilters}>
											wyczyść filtry
										</button>
									</div>
								</div>
							</div>
						) : (
								<div className="m-auto">
							<button className={` Button   onlyMobileButton`} onClick={() => setIsModalOpen(true)}>
								Sprecyzuj czego szukasz
							</button>
							</div>
						)}
						<div>
							<div className={` text-center ${styles.mainSection}`}>
								<h3>Znajdź produkt odpowiedni dla Ciebie</h3>
								<p>
									Uzyskując nieograniczony dostęp do filmów, masz szansę nadrobić webinary w wygodnym dla siebie momencie.
								</p>
							</div>
							{filteredProducts.length === 0 ? (
								<p>Brak produktów do wyświetlenia.</p>
							) : (
								filteredProducts.map((product) => (
									<div className={`${styles.singleProduct}`} key={product.id}>
										<span className={` ${styles.availableTop}`}>{product.available}</span>
										<span className={`${styles.date}`}>{formattedDate}</span>
										<div className={`${styles.productPhoto}`}>
											<Image src={product.photo} alt={product.title} width={300} height={300} />
										</div>
										<div className={`${styles.textWraper} w-full`}>
											<div className={`${styles.cardTitle}`}>
												<Link className={` ${styles.anchor}`} href="">
													<h4>{product.title}</h4>
												</Link>
												<span className={` ${styles.underLink}`}>{product.date}</span>
											</div>
											<p className={` ${styles.mainText}`}>{product.text}</p>
											<div className={`${styles.circle} `}>
												<Image src={product.circle} alt="circle" width={15} height={15} />
												<p>{product.available}</p>
											</div>
											<div className={`${styles.priceParent} flex items-center justify-end`}>
												<p className={` ${styles.amount} font-bold`}> {product.price} zł</p>
												<button className={`Button ${styles.button} `} onClick={() => { /* Handle add to cart */ }}>
													Dodaj do koszyka
												</button>
											</div>
										</div>
									</div>
								))
							)}
						</div>
					</div>
				</div>
			</section>
			{isModalOpen && (
				<Modal onClose={() => setIsModalOpen(false)}>
					<div className={`${styles.searchSection} onlyDesktop`}>
						<div className={`${styles.filters}`}>
							<h6>Kategoria</h6>
							{[
								"Rozwój dziecka",
								"Nauka noszenia",
								"Asymetria ułożeniowa",
								"Webinar",
								"Poradnik",
							].map((category, index) => (
								<div key={index} className={` mb-7 ${styles.inputs}`}>
									<fieldset>
										<label className="" htmlFor={category}>
											<input
												type="checkbox"
												id={category}
												className={`${styles.checkbox}`}
												checked={selectedCategories.includes(category as Category)}
												onChange={() => handleCategoryChange(category as Category)}
											/>
											<span>{category}</span>
										</label>
									</fieldset>
								</div>
							))}
							<div className="">
								<button className={`Button ${styles.buttonLeft}`} onClick={() => setFilteredProducts(filteredProducts)}>
									Wyszukaj
								</button>
								<button className={` outline ${styles.noButton}`} onClick={handleClearFilters}>
									wyczyść filtry
								</button>
							</div>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
}

export default Hero;
