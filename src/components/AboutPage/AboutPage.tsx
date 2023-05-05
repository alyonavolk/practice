import * as React from 'react';
import './aboutPage.scss';
import Menu from '../subComponents/menu/Menu';
import About1 from "../../resources/img/about1.jpg";
import About2 from "../../resources/img/about2.jpg";

interface IAboutPageProps {
}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <div className="about">
        <Menu color='black' />
        <h1>О нас</h1>
        <div className="about__director">
            <img src={About1} alt="" className="director"/>
            <div className='description'>
              <p>Меня зовут Светлана <br/>Я очень люблю путешествовать по миру. Началось всё в 2007 году, когда я первый раз съездила 
                  в Турцию. Приехала, сдала на права, купила машину. И с тех пор езжу по стране каждый год в "кругосветное путешествие". Друзья назвали меня Светка-Кругосветка. Так название и получилось.
              </p>
              <p>
                  Уже 8 лет работаю экскурсоводом по Челябинской, Свердловской области, Башкирии и Уралу. Председатель Клуба экскурсоводов Челябинской области. Очень люблю школьные группы. Хочу показать и рассказать туристам, какой красивый наш край, Урал 
                  и вся наша страна.Поэтому планирую расширять ассортимент туров. Хочу возить не только по Уралу, а по всей России.
              </p>
            </div>
        </div>
        <img src={About2} alt="" className="workers"/>
    </div>
  );
};

export default AboutPage;
