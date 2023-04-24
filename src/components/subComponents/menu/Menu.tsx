import { NavLink } from 'react-router-dom';
import './menu.scss';

import { ROUTES } from '../../ROUTES';

interface IMenuProps {
    color?: string;
}

const Menu: React.FunctionComponent<IMenuProps> = ({color = 'white'}) => {
  return (
    <ul className={`menu menu__${color}`}>
        <li className='menu__item'>
            <NavLink className={({ isActive, isPending }) => 
                isActive ? "active" : ""} to={ROUTES.tours}>
                    Маршруты
            </NavLink>
        </li>  
        <li className='menu__item'>
            <NavLink className={({ isActive, isPending }) => 
                isActive ? "active" : ""} to={ROUTES.about}>
                    О нас
            </NavLink>
        </li> 
        <li className='menu__item'>
            <NavLink className={({ isActive, isPending }) => 
                isActive ? "active" : ""} to={ROUTES.articles}>
                    Статьи
            </NavLink>
        </li> 
        <li className='menu__item'>
            <NavLink className={({ isActive, isPending }) => 
                isActive ? "active" : ""} to={ROUTES.contacts}>
                    Контакты
            </NavLink>
        </li> 
        <li className='menu__item'>
            <NavLink className={({ isActive, isPending }) => 
                isActive ? "active" : ""} to={ROUTES.cart}>
                    Корзина
            </NavLink>
        </li> 
        <li className='menu__item'>
            <NavLink className={({ isActive, isPending }) => 
                isActive ? "active" : ""} to={ROUTES.favourites}>
                    Избранное
            </NavLink>
        </li> 
        <li className='menu__item'>
            <NavLink className={({ isActive, isPending }) => 
                isActive ? "active" : ""} to={ROUTES.profile}>
                    Профиль
            </NavLink>
        </li>  
    </ul>
  );
};

export default Menu;
