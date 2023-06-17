import Header from "../header/Header"; // импортируем компоненту Header
// import Content from "../content/Content"; // импортируем компоненту Content
// import styles from "./Home.module.css"; // импортируем модуль css
// import { imagesWinter } from "./images.data"; // импортируем данные картинок
import { BrowserRouter, Route, Routes } from "react-router-dom"; // добвляем для работы роутов в главном файле
import Winter from "../winter/Winter";
// import Test from "./Test";
import Our_prices from "../our_prices/Our_prices";
// import { Link } from "react-router-dom"; // добвляем для работы роутов там где указываем линки
import { Link } from "react-router-dom"; // добвляем для работы роутов там где указываем линки

// const NewYear = () => {
//   return (
//     <>
//       <div className={styles.content}>
//         <div>*** изображений</div>
//         <div className={styles.editor_selections_items}>
//           {imagesWinter.map((img) => (
//             <a href="#" key={img.id} className={styles.editor_selections_item}>
//               <div
//                 className={styles.image}
//                 style={{
//                   backgroundImage: `url(${img.image})`, Получаем в фон картинку из нашей мини базы
//                 }}
//               />
//               <div className={styles.img_card__panel}>
//                 <h2>{img.name}</h2>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

const Home = () => {
  return (
    <BrowserRouter>
      <>
        {/* Это компонента шапки сайта которая присутствует всегда */}
        <Header />
        {/* <Winter /> */}
        {/* <Test /> */}

        {/* <Routes>
          <Route path="/content" element={<Content />} />
          <Route path="/winter" element={<Winter />} />
        </Routes> */}

        <Routes>
          <Route path="/winter" element={<Winter />} />
          <Route path="/our_prices" element={<Our_prices />} />
        </Routes>

        <Link to="/our_prices">Наши цены</Link>
        <hr />
        <Link to="/winter">Компонета зима</Link>

        {/* <Our_prices /> */}
      </>
    </BrowserRouter>
  );
};

export default Home;
