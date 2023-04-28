import * as React from 'react';
import './cardTours.scss';

import timeImg from '../../../resources/img/time.svg';
import geo from '../../../resources/img/geo.svg';
import Button from '../button/Button';
import { NavLink } from 'react-router-dom';

interface ICardToursProps {
    img: string;
    title: string;
    description: string;
    time: string;
    place: string;
    price: number;
    like: boolean;
    link: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

/* для работы с карточками стоит прописвать путь от practice */

const CardTours: React.FunctionComponent<ICardToursProps> = ({
    img, title, description,
    time, place, price, like,
    link, onClick
}) => {
  return (
    <div className='cardTours'>
        <div className='cardTours__img'>
            <NavLink to={link}>
                <img src={`practice/img/${img}`} alt="img" />
            </NavLink>
            <button className={`cardTours__like ${ like ? 'cardTours__like_active' : ''}`} onClick={onClick}>
                <div className='heart'></div>
            </button>
        </div>
        <div className='cardTours__content'>
            <div className='cardTours__title'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className='cardTours__content_bottom'>
                <div className='cardTours__content_time'>
                    <p>
                        <img src={timeImg} alt="time" />
                        <span>{time}</span>
                    </p>
                    <p>
                        <img src={geo} alt="geo" />
                        <span>{place}</span>
                    </p>
                </div>
                <div className='cardTours__content_price'>
                    <p>{price} руб.</p>
                    <Button type='tours-card'>Забронировать</Button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardTours;
