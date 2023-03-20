import styles from "./Home.module.css"; // импортируем модуль css
import { images } from "./images.data"; // импортируем данные картинок

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <span className={styles.logo} title="" />
        <div className={styles.rigt_panel}>
          <nav className={styles.header__nav}>
            <a className={styles.header__nav_link} href="/search/image">
              Поиск
            </a>
            <a className={styles.header__nav_link} href="/galleries">
              Подборки
            </a>
            <a className={styles.header__nav_link} href="/pricing">
              Наши цены
            </a>
            <a className={styles.header__nav_link} href="/about">
              О нас
            </a>
          </nav>
          <div className={styles.login_link}>
            <a href="/signin" className={styles.link}>
              Войти
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Content = () => {
  return (
    <>
      <div className={styles.content}>
        <h2 className={styles.page_header}>ИЗБРАННЫЕ ФОТОГРАФИИ</h2>
        <p className={styles.page_subheader}>
          Оцените тематические коллекции, тщательно собранные нашими
          фоторедакторами
        </p>
        <div className={styles.editor_selections_items}>
          {images.map((img) => (
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
        {/* <a href="#" className={styles.selections__all}></a> */}
      </div>
    </>
  );
};

const Winter = () => {
    return (
      <>
      фпфпф
          </>
  );
};





const Home = () => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default Home;
