import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from '../ROUTES';

import MainPage from '../mainPage/MainPage';
import Tours from '../Tours/Tours';
import ArticlesPage from '../Articles/ArticlesPage';
import AboutPage from '../AboutPage/AboutPage';
import NotFound from '../NotFound/NotFound';
import TourPage from '../TourPage/TourPage';
import Article from '../ArticlePage/ArticlePage';
import Contacts from '../Contacts/Contacts';

import img11 from "../../resources/img/article1-1.jpg";
import img12 from "../../resources/img/article1-2.jpg";
import img13 from "../../resources/img/article1-3.jpg";

import img21 from "../../resources/img/article2-1.jpg";
import img22 from "../../resources/img/article2-2.jpg";
import img23 from "../../resources/img/article2-3.jpg";

import img31 from "../../resources/img/article3-1.jpg";
import img32 from "../../resources/img/article3-2.jpg";
import img33 from "../../resources/img/article3-3.jpg";


interface IRoutesPageProps {
}

const RoutesPage: React.FunctionComponent<IRoutesPageProps> = () => {
  return (
    <Routes>
        <Route path={ROUTES.main} 
        element={(
          <MainPage />
        )} />
        <Route path={ROUTES.tours} 
        element={(
          <Tours />
        )} />
        <Route path={ROUTES.about}
        element={
          <AboutPage />
        } />
        <Route path={ROUTES.articles}
        element={
          <ArticlesPage />
        } />
        <Route path={ROUTES.contacts}
        element={
          <Contacts />
        } />
        <Route path={ROUTES.cart}
        element={
          <NotFound />
        } />
        <Route path={ROUTES.favourites}
        element={
          <NotFound />
        } />
        <Route path={ROUTES.profile}
        element={
          <NotFound />
        } />
        <Route path={ROUTES.article1}
        element={ 
          <Article nameArticle={"Фестиваль Уральские валенки в г. Куса"}
          mainImg={img31} 
          firstImg={img32} secondImg={img33}
          firstP={<p>Каждый нашёл здесь развлечение по душе. Весёлая концертная программа, игры и хороводы. Конкурс костюмов...валенков. Тема валенка прослеживалась во всём. Песни, костюмы, пирожные, торты. Все желающие сфотографировались у самого большого в мире валенка.</p>}
          secondP={<p>А какие богатые торговые ряды «Скатерти-самобранки» были! Сувениры от умельцев, валенки любого размера и цвета, украшенные и расписанные. А уж гастрономические изыски к новогоднему столу, м-м-м! Гуси, сало, колбасы из конины, копченое/вяленое мясо, фермерский сыр, пирожки, блины. Кризис? Неа, не слышали!</p>}/>
        } />
        <Route path={ROUTES.article2}
        element={
          <Article nameArticle={"Где отдохнуть в зимние выходные?"}
          mainImg={img21} 
          firstImg={img22} secondImg={img23}
          firstP={<p>Чтобы интересно провести выходной, необязательно уезжать далеко. Достаточно сменить удобный диван на природу за чертой города.<br/><br/>Вокруг Челябинска много интересных мест. В одно из них наша команда специально съездила, чтобы рассказать вам о нём поподробнее. Это конно-стрелковый экстрим-клуб «Быстрай».</p>}
          secondP={<p>Здесь каждый найдёт себе развлечение по душе! Пострелять из лука, арбалета или ружья, поохотиться на мамонта при помощи копья или метать ножи, покормить с рук чёрных поросяток или кудрявых козликов, погонять на квадроцикле или снегоходе и многое другое!<br/><br/> Экстрим-клуб «Быстрай»-отличное место для отдыха с семьёй, компании друзей, школьного класса или проведения корпоративного мероприятия. Радуга положительных эмоций вам будет обеспечена! Итак, зима-не повод сидеть дома. Путешествуйте! Для всех желающих организуем поездки школьных и корпоративных групп. Обращайтесь!</p>}/>
        } />
        <Route path={ROUTES.article3}
        element={
          <Article nameArticle={"Музей пельменя г. Миасс"} 
            mainImg={img11} 
            firstImg={img12} secondImg={img13} 
            firstP={<p>Как вы думаете, если спросить 10 людей: «Какое блюдо у них самое любимое»? Что они ответят? 8 из 10 скажут: «пельмени»!<br/><br/>В переводе с пермских языков -«хлебное ухо».<br/> <br/>Урал издавна славится «уральскими пельменями». Делают их из 3 видов мяса: говядины, свинины и баранины.</p>} 
            secondP={<p>В г. Миассе Челябинской области даже есть Музей пельменя.<br/><br/>На экскурсии вам расскажут историю пельменя, проведут мастер-класс по лепке и обязательно накормят!<br/><br/>Экскурсию в Миасс можно заказать как для школьных групп, так и для корпоративов.</p>}/>
        } />
        <Route path={ROUTES.tour}
        element={
          <TourPage />
        } />
    </Routes>
  );
};

export default RoutesPage;
