import React from "react"; // Импортируем библиотеку реакт в нашу компоненту
import styles from "./Our_prices.module.css"; // импортируем модуль css

const Our_prices = () => {
  return (
    <>
      <p className={styles.text}>our_prices</p> {/* Тестовый текст */}
      <div className="subheader">
        <p>НАШИ ЦЕНЫ</p>
        <p>Покупайте штучно, экономьте с подпиской.</p>
      </div>
      <div className="panel_top">
        <p>По подписке</p>
        <p>Штучные покупки</p>
        <p>Индивидуальные условия</p>
      </div>
    </>
  );
};

export default Our_prices;
