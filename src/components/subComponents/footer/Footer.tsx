import { NavLink } from 'react-router-dom';
import './footer.scss';

import { ROUTES } from '../../ROUTES'; 
import logo from '../../../resources/img/logoFooter.svg';
import vk from '../../../resources/img/vk.svg';
import ok from '../../../resources/img/ok.svg';
import tg from '../../../resources/img/tg.svg';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <footer className='footer'>
        <div className='footer__logo'>
        <NavLink to={ROUTES.main}>
          <img src={logo} alt='logo'/>
        </NavLink>
        </div>
        <ul className='footer__items'>
            <li className='footer__item'>
                <NavLink className={`footer__link`} to={ROUTES.tours}>
                    Маршруты
                </NavLink>
            </li>
            <li className='footer__item'>
                <ul>
                    <li>
                        <NavLink className={`footer__link`} to={ROUTES.about}>
                            О нас
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={`footer__link`} to={ROUTES.articles}>
                            Статьи
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={`footer__link`} to={ROUTES.contacts}>
                            Контакты
                        </NavLink>
                    </li>
                </ul>
            </li>
            <li className='footer__item'>
                <ul>
                    <li>
                        <NavLink className={`footer__link`} to={ROUTES.profile}>
                            Профиль
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={`footer__link`} to={ROUTES.cart}>
                            Корзина
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={`footer__link`} to={ROUTES.favourites}>
                            Избранное
                        </NavLink>
                    </li>
                </ul>
            </li>
            <li className='footer__item'>
                <NavLink className='footer__link_soc'
                    to='https://vk.com/krugosvetka_ural'>
                    <img src={vk} alt='vk' />
                </NavLink>
                <NavLink className='footer__link_soc' 
                    to='https://ok.ru/profile/16606458438?utm_campaign=mobile_share&utm_content=profile'>
                    <img src={ok} alt='ok' />
                </NavLink>
                <NavLink className='footer__link_soc' 
                    to='https://t.me/krugosvetka_74'>
                    <img src={tg} alt='ok' />
                </NavLink>
            </li>
        </ul>
    </footer>
  );
};

export default Footer;
