import Image from "next/image";
import Photo from "../../../../public/assets/HomePage/Ebook/ebook_product-title.webp";
import styles from "./Second.module.scss";
import Link from "next/link";

async function Second() {


  return (
    <>
      <section className={`${styles.Ebook} d-flex flex-center`}>
        <div className={`Container m-auto`}>
          <div className={`${styles.topSection} flex flex-col items-center`}>
            <h2>Codzienna praca z pacjentami</h2>
            <p>
            Specjalizuję się w fizjoterapii niemowląt oraz dzieci z wadami postawy
            </p>
          </div>
          <div className={`${styles.bottomSection} flex  items-center`}>
            <div className="Inner flex items-center"> 
            <div className={`${styles.leftSection} w-full`}>
              <div className={`${styles.image} flex justify-center`}>
                <Image src={Photo} alt="moj pierwszy ebook" width={361} height={322} />
                </div>
                </div>
                <div className={`${styles.rightSection} w-full flex flex-col gap-3 items-center`}>
                <div className="font-bold"><h3>Jak przebiega wizyta</h3></div>
                <div className={`${styles.text} flex flex-col gap-3`}>
                
                    <ul>
                        <li>Na pierwszej wizycie zbieram wywiad od rodzica i  badam maluszka.</li>
                        <li>Stawiam diagnozę i tłumaczę, jak mogę pomóc dziecku.</li>
                        <li>Uczę rodzica prawidłowej pielęgnacji, czyli noszenia, podnoszenia, przewijania itp.</li>
                        <li>Rozluźniam, masuję i ćwiczę z dzieckiem.</li>
                        <li>Pokazuję ćwiczenia domowe dla rodzica i sprawdzam poprawność ich wykonania.</li>
                        </ul>

<b>Zależy mi na edukacji rodzica. Na konsultacji u mnie nauczysz się jak ćwiczyć z dzieckiem.</b>
                    </div>
             
          </div>
        </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Second;
