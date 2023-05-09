import './tourPage.scss';
import Menu from '../subComponents/menu/Menu';
import Button from '../subComponents/button/Button';

import tour1 from '../../resources/img/tour1.jpg';
import tour2 from '../../resources/img/tour2.jpg';
import time from '../../resources/img/pageTour.svg';

const TourPage: React.FC = (props) => {
  return (
    <div className='tourPage'>
        <Menu color='black' />
        <h2 className='tourPage__title'>Название тура</h2>
        <p className='tourPage__title_descr'>тип тура</p>
        <div className='tourPage__img'>
            <img src={tour1} alt="tour" />
        </div>
        <div className='tourPage__content'>
            <div className='tourPage__map'>
                <img src={time} alt='time' />
                <ul>
                    <li>8:00 <br/>Выезд из Челябинска</li>
                    <li>11:00 <br/>Знакомство с городом Сысерть</li>
                    <li>12:30 <br/>Экскурсия и мастер-класс на фабрике «Сысертский фарфор»</li>
                    <li>14:00 <br/>Прогулка в парке Бажовские места </li>
                    <li>17:00 <br/>Выезд в Челябинск</li>
                    <li>20:00 <br/>Прибытие в Челябинск</li>
                </ul>
            </div>
            <div className='tourPage__info'>
                <p className='tourPage__info_descr'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='tourPage__info_img'>
                    <img src={tour2} alt='img' />
                    <img src={tour2} alt='img' />
                    <img src={tour2} alt='img' />
                </div>
                <p className='tourPage__price_title'>
                    Стоимость
                </p>
                <div className='tourPage__price'>
                    <ul>
                        <li>
                            <p>для взрослых</p>
                            <p>2450 руб.</p>
                        </li>
                        <li>
                            <p>для детей</p>
                            <p>2250 руб.</p>
                        </li>
                    </ul>
                    <div>
                        <Button type='tours-card'>Забронировать</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TourPage;
