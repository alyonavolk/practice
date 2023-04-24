import { NavLink } from 'react-router-dom';
import './header.scss';

import { ROUTES } from '../../ROUTES';
import logo from '../../../resources/img/logoHeader.svg';
import vk from '../../../resources/img/vk.svg';
import ok from '../../../resources/img/ok.svg';

interface IHeaderProps {
}

// возможно нужен проп для box-shadow

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <NavLink to={ROUTES.main}>
          <img src={logo} alt='logo'/>
        </NavLink>
      </div> 
      <div className='header__info'>
        <p>площадь Революции, г. Челябинск</p>
        <div className='header__info_link'>
          <NavLink to='https://vk.com/krugosvetka_ural'>
            <img src={vk} alt='vk' />
          </NavLink>
          <NavLink to='https://ok.ru/profile/16606458438?utm_campaign=mobile_share&utm_content=profile'>
            <img src={ok} alt='ok' />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
