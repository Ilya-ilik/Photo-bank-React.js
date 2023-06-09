import React from "react"; // Импортируем библиотеку реакт в нашу компоненту
import styles from "./Our_prices.module.css"; // импортируем модуль css
import { pricingCard } from "../home/images.data"; // импортируем данные карточек "наши цены"

const Our_prices = () => {
  return (
    <>
      <div className={styles.subheader}>
        <div className={styles.subheader_container}>
          <h1 className={styles.first_text}>НАШИ ЦЕНЫ</h1>
          <p className={styles.second_text}>Покупайте штучно, экономьте с подпиской.</p>
        </div>
      </div>
      <div className={styles.panel_top}>
        <a href="#">По подписке</a>
        <a href="#" className={styles.link}>Штучные покупки</a>
        <a href="#" className={styles.link}>Индивидуальные условия</a>
      </div>
      <div className={styles.container}>
        <div className={styles.images_bucket}>
          {pricingCard.map((item) => ( // Здесь обращаемся к импортированным данным массива pricingCard и мапим их, создаем стрелочную функцию чтобы все завелось и в аргументах пишем item через него далее будем обращаться к данным
            <a href="#" key={item.id} className={styles.pricing_card}> {/* Здесь создаем общий контейнер для показа всех данных, item.id - значит что мы будем выводить карточки по id  без key будет не правильно делать на сколько я слышал */}
              <div>{item.quantity}</div> {/* item.quantity - значит что мы будем выводить в карточки  quantity (колличество) */}
              <p>{item.text}</p> {/* item.text - значит что мы будем выводить в карточки  текст */}
              <p>{item.license}</p> {/* item.license - значит что мы будем выводить в карточки  license (лицензию) */}
            </a>
          ))}
        </div>
      </div>
      <div className="pricing_contacts"> {/* это контейнер для информации о контактах */}
        <div className="container_clearfix">
          <div className="pricing_contacts__help"></div>
          <div className="pricing_contacts__form"></div>
        </div>
      </div>
      <div className="footer"></div> {/* ! */} {/* Футур надо в отдельную компоненту скорее всего выносить */}
    </>
  );
};

export default Our_prices;



