'use client';

import styles from "./Header.module.scss";
import youTubeIcon from "../../../../public/assets/Header/youtube.svg";
import instagramIcon from "../../../../public/assets/Header/instagram.svg";
import facebookIcon from "../../../../public/assets/Header/facebook.svg";
import tikTokIcon from "../../../../public/assets/Header/tiktok.svg";
import Logo from "../../../../public/assets/Header/Logo.svg";
import cart from "../../../../public/assets/Header/cart.svg";
import search from "../../../../public/assets/Header/Search.svg";
import Image from "next/image";
import Link from "next/link";
import ActiveLink from "../../ActiveLink/page";
import { useEffect, useState } from "react";

const Header = () => {
	const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
	return (

        <header >
			<div className={` ${styles.topHeader} py-2`}>
				<div className={`${styles.inner} flex justify-center gap-8 `}>
					<div className={` flex justify-center gap-10`}>
						<Image
							src={youTubeIcon}
							className={styles.headerImage}
							alt="YouTube"
							width={15}
							height={15}
						/>
					</div>
					<div>
						<Image
							src={instagramIcon}
							className={styles.headerImage}
							alt="YouTube"
							width={15}
							height={15}
						/>
					</div>
					<div>
						<Image
							src={facebookIcon}
							className={styles.headerImage}
							alt="YouTube"
							width={15}
							height={15}
						/>
					</div>
					<div>
						<Image
							src={tikTokIcon}
							className={styles.headerImage}
							alt="YouTube"
							width={15}
							height={15}
						/>
					</div>
				</div>
			</div>
			<div className={` ${isSticky ? styles.sticky : ""} ${styles.bottom}`}>
				<div className={`${styles.bottomContainer} Container`}>
					<div className={styles.bottomContainerInner}>
						<div className={styles.logo}>
							<Link className={styles.logos} href="/">
								<Image src={Logo} width={200} height={200} alt="Logo" />
							</Link>
						</div>
						<div className={styles.links}>
							<ActiveLink href="/" className={styles.anchor} activeClassName={styles.anchorActive}>
								Start
							</ActiveLink>
							<Link className={styles.anchor} href="/blog">
								Blog
							</Link>
							<Link className={styles.anchor} href="/filmy-i-ebooki">
								Filmy i ebooki
							</Link>
							<Link className={styles.anchor} href="/kurs-noszenia">
								Kurs noszenia
							</Link>
							<Link className={styles.anchor} href="/fizquiz">
								FizQuiz
							</Link>
							<Link className={styles.anchor} href="/o-mnie">
								O mnie
							</Link>
							<Link className={styles.anchor} href="/wizyta">
								Wizyta
							</Link>
							<button>En</button>
							<div className={styles.cart}>
								<Image src={cart} width={15} height={15} alt="cart" />
								<div className={styles.cartContent}>
									<h4>Mój koszyk</h4>
									<span>Sprawdź i zapłać za produkty</span>
									<div className={styles.noProducts}>
										<div className="HeaderCart_cartBottom__m83Kt">
											<small>Dodaj pierwszy element do koszyka</small>
										</div>
									</div>
								</div>
							</div>

							<Link href="/search" className={styles.anchor}>
								<Image src={search} width={20} height={20} alt="cart" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
