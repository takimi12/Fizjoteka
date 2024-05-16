import Image from "next/image";
import styles from "./blog.module.scss";
import Breadcrumbs from "@/components/breadcrumbs/page";
import etiquette from "../../../public/assets/Blog/etiquette.svg";
import calendar from "../../../public/assets/Blog/calendar.svg";

function Hero() {
  const data = [
    {
      temat: "Prowadzenie dziecka za rączki",
      title: etiquette,
      tagi: ["Pierwszy rok życia", "Zdrowie dziecka", "niemowlak", "rozwojdziecka"],
      calendar: calendar,
      data: "06/05/2024",
      status: "CZYTAM"
    },
    {
      temat: "Noszenie w pionie niemowlaka",
      title: etiquette,
      tagi: ["Pierwszy rok życia", "Zdrowie dziecka", "niemowlak", "rozwojdziecka"],

      calendar: calendar,
      data: "28/09/2023",
      status: "CZYTAM"
    }
  ];

  return (
    <>
      <Breadcrumbs />
      <section className={`{styles.blog} flex justify-center`}>
        <div className="Container">
          <h1 className={`${styles.mainHeading}`}>Rozwój dziecka okiem fizjoterapeuty</h1>
          <div className={`${styles.blocs} flex  justify-between	gap-10`}>
            {data.map((blog, index) => (
              <div key={index} className={` ${styles.singlePost}`}>
                <div className={styles.top}>
                  <h3>{blog.temat}</h3>
                </div>
                <div className={` ${styles.bottom} flex  flex-col` }>


                <div className={`${styles.callendar} flex gap-2`}>
                  <Image width={15} height={15} src={blog.title} alt="Blog Title" />
                  <p>{blog.data}</p>
                  </div>
                  <div className={`${styles.etiquette} callendar flex gap-2`}>
                  <Image width={15} height={15} src={blog.calendar} alt="Calendar Icon" />
                  <ul className={`flex `}>
                    {blog.tagi.map((tag, index) => (
                      <li key={index}>{tag}, </li>
                    ))}
                  </ul>
 
                  </div>
                  </div>

                </div>
 
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
