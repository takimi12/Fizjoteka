import React from 'react';
import styles from './thirteen.module.scss'; 



const Tvelwe = () => {
  return (
    <section className={` flex justify-center ${styles.thirteen}`}>
        <div className={` Container flex-col flex items-center gap-5`}>
            <h2>Już wiesz, że chcesz dołączyć do grona świadomych i spokojniejszych rodziców?</h2>
            <button className={`Button`}>WRÓĆ DO OFERTY</button>
        </div>
    
    </section>
  );
}

export default Tvelwe;
