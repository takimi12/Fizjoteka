import Image from "next/image";
import Photo from "../../../../public/assets/HomePage/Fizquizz/fizquiz.webp";
import styles from "./Five.module.scss";
import Link from "next/link";

async function Third() {


  return (
    <>
      <section className={`${styles.Ebook} d-flex flex-center`}>
        <div className={`Container m-auto`}>
          <div className={`${styles.bottomSection} flex  items-center`}>
            <div className="Inner flex items-center"> 
        
                <div className={`${styles.leftSection} w-full flex flex-col gap-3 justify-center`}>
                <div className={`${styles.text} flex flex-col gap-3`}>
                    <h6>Metody, które stosuję</h6>

                    <div><ul><li className={` ${styles.list}`}>Osteopatia w pediatrii i neonatologii,</li><li className={` ${styles.list}`}>Zoga movement w terapii niemowląt,</li><li className={` ${styles.list}`}>Terapia niemowląt z zaburzeniami karmienia,</li><li className={` ${styles.list}`}>Trójpłaszczyznowa terapia wad stóp u dzieci,</li><li className={` ${styles.list}`}>Terapia manualna dzieci i niemowląt,</li><li className={` ${styles.list}`}>PNF w pediatrii,</li><li className={` ${styles.list}`}>Powięź w ujęciu osteopatycznym,</li><li className={` ${styles.list}`}>Kinesiotaping w pediatrii,</li><li className={` ${styles.list}`}>Neurorozwojowa diagnoza i terapia dzieci z asymetrią posturalną,</li><li className={` ${styles.list}`}>Neurorozwojowa prewencja i korekcja wad postawy u niemowląt,</li><li className={` ${styles.list}`}>FITS – Funkcjonalna Indywidualna Terapia Skolioz.</li></ul></div>
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

export default Third;
