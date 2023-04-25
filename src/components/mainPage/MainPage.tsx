import * as React from 'react';
import './mainPage.scss';
import Button from '../subComponents/button/Button';
import Menu from '../subComponents/menu/Menu';
import FormSearch from '../subComponents/formSearch/FormSearch';
import CardArticle from '../subComponents/CardArticle/CardArticle';
import Article1 from '../../resources/img/article2-1.jpg';
import Article2 from '../../resources/img/article3-2.jpg';
import Article3 from '../../resources/img/article1-3.jpg';
import Gallery from '../subComponents/gallery/Gallery';
import CardComment from '../subComponents/CardComment/CardComment';
import Autor1 from '../../resources/img/екатерина.png';
import Autor2 from '../../resources/img/елена.png';
import Autor3 from '../../resources/img/римма.png';
import { ROUTES } from '../ROUTES';

interface IMainPageProps {
}

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
  return (
    <div className='main'>
        <Menu />
        <div className='main__hero'>
            <div className='main__hero_cyrcle'>
                <h1>Навстречу красоте</h1>
                <p>лучшие места родного края</p>
                <Button children="Забронировать тур"/>
            </div>
        </div>
        <div className='main__form'><FormSearch /></div>
        <div className='main__articles'>
            <div>
                <CardArticle image={Article1} nameArticle='Где отдохнуть в зимние выходные?' link={ROUTES.article1}/>
                <CardArticle image={Article2} nameArticle='Фестиваль Уральские валенки в г. Куса' link={ROUTES.article2}/>
                <CardArticle image={Article3} nameArticle='Музей пельменя г. Миасс' link={ROUTES.article3}/>
            </div>
        </div>
        <div className='main__gallery'>
            <h1>Галерея</h1>
            <Gallery/> 
        </div>
        <div className='main__comments'>
            <h1>Отзывы</h1>
            <div className='bloks_autors'>
                <CardComment imageAutor={Autor1} nameAutor="Екатерина" comment="Спасибо за тур в Екатеринбург на Свердловскую киностудию! Очень интересно и познавательно. Дети были в восторге. Светлана показала интересные места в городе, удивляет каждый раз, спасибо! Ждём новых встреч с нетерпением!"/>
                <CardComment imageAutor={Autor2} nameAutor="Елена" comment="Большое спасибо Светлане и Татьяне за чудесные поездки, эмоции! Замечательная организация тура. Самое лучшее место — это прекрасные пейзажи, чистейший воздух, покой и умиротворение."/>
                <CardComment imageAutor={Autor3} nameAutor="Римма" comment="Светлана — супергид. Спасибо за интересную поездку в Екатеринбург, очень познавательно, позитивно, с юмором. Очень благодарны!"/>
            </div>
        </div>
        <div className='main__connection'>
            <h1>Свяжитесь с нами, если у вас остались вопросы</h1>
            <div><input type="text" name="" id="" placeholder="Номер телефона"/><Button children="Обратный звонок"/></div>
            <div className='radio'>
                <input type="radio" name="" id="trust" className='custom-radio'/>
                <label htmlFor="trust">я согласен на обработку персональных данных</label> 
            </div>
        </div>
    </div>
  );
};

export default MainPage;
