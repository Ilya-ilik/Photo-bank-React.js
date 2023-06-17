import styles from "./Header.module.css"; // импортируем модуль css
// import styles from "./Home.module.css"; // импортируем модуль css это был старый путь можно удалить


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

export default Header;
