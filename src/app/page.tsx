import HomePage from "../components/Homepage/page";
import { useTranslations } from "next-intl";
export default function Home() {
	const t = useTranslations('Index');
	console.log(t('title'));
	return (
		<main className="">
						{/* <h1>{t('title')}</h1> */}
			<HomePage />
		</main>
	);
}
