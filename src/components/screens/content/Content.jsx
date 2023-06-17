import styles from "../home/Home.module.css"; // импортируем модуль css
import { images } from "../home/images.data"; // импортируем данные картинок
import { Link } from "react-router-dom"; // добвляем для работы роутов там где указываем линки

const Content = () => {
  return (
    <>
    <div className={styles.content}>
      <h2 className={styles.page_header}>ИЗБРАННЫЕ ФОТОГРАФИИ</h2>
      <p className={styles.page_subheader}>
        Оцените тематические коллекции, тщательно собранные нашими
        фоторедакторами
      </p>


   
    <Link to="/winter">
      <div className={styles.editor_selections_items}>
        {images.map((img) => ( // здесь принимаем из базы картинки и мапим их по айдишнику 
          <a href="#" key={img.id} className={styles.editor_selections_item}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${img.image})`, // Получаем в фон картинку из нашей мини базы
              }}
            /> 
            <div className={styles.img_card__panel}>
              <h2>{img.name}</h2>
              <p>XXX изображений</p>
            </div>
          </a>
        ))}
      </div>
    </Link>




      <a href="#" className={styles.selections__all}> </a>
    </div>
  </>
  );
};

export default Content;
