import React from "react";
import { imagesWinter } from "../home/images.data"; // импортируем данные картинок
import styles from "../home/Home.module.css"; // импортируем модуль css

const Winter = () => {
  return (
    <>
      <div className={styles.content}>
        <div>*** изображений</div>
        <div className={styles.editor_selections_items}>
          {imagesWinter.map((img) => (
            <a href="#" key={img.id} className={styles.editor_selections_item}>
              <div
                className={styles.image}
                style={{
                  // Получаем в фон картинку из нашей мини базы
                  backgroundImage: `url(${img.image})`,
                }}
              />
              <div className={styles.img_card__panel}>
                <h2>{img.name}</h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Winter;
