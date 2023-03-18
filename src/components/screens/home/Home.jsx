import styles from "./Home.module.css";

const Header = () => {
    return (
      <>
        <div className={styles.header}>
          <span class={styles.logo} title=""/>
          <div class={styles.rigt_panel}>
            <nav class={styles.header__nav}>
              <a class={styles.header__nav_link} href="/search/image">Поиск</a>
              <a class={styles.header__nav_link} href="/galleries">Подборки</a>
              <a class={styles.header__nav_link} href="/pricing">Наши цены</a>
              <a class={styles.header__nav_link} href="/about">О нас</a>
            </nav>
            <div class={styles.login_link}>
              <a href="/signin" class={styles.link}>Войти</a>
            </div>
          </div>
        </div>
      </>
    );
  };

const Home = () => {
  return (
    <>
     <Header/>
    </>
  );
};

export default Home;
