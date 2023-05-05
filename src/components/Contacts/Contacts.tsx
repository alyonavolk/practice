import * as React from 'react';
import { NavLink } from 'react-router-dom';
import "./contacts.scss";
import Menu from '../subComponents/menu/Menu';
import TG from "../../resources/img/tg.svg";
import VK from "../../resources/img/vk.svg";
import OK from "../../resources/img/ok.svg";
import Map from "../../resources/img/map.jpg";
import Geo from "../../resources/img/geo.svg";
import ASymbol from "../../resources/img/a-symbol.svg";

interface IContactsProps {
}

const Contacts: React.FunctionComponent<IContactsProps> = () => {
    return (
        <div className='contacts'>
            <Menu color='black'/>
            <h1>Контакты</h1>
            <div className='contacts__info'>
                <NavLink to="https://yandex.ru/maps/56/chelyabinsk/geo/ploshchad_revolyutsii/1520636180/?ll=61.402535%2C55.160191&z=17.81"><img src={Map} alt="" className='map'/></NavLink>
                <div className='more_info'>
                    <div><img src={Geo} alt="" className='adress'/><p>пл. Революции, Челябинск</p></div>
                    <div><img src={ASymbol} alt="" className='mail'/><p>krugosvetka_ural</p></div>
                    <div className='seti'>
                        <NavLink className='footer__link_soc' to='https://vk.com/krugosvetka_ural'>
                            <img src={VK} alt='vk' />
                        </NavLink>
                        <NavLink className='footer__link_soc' 
                            to='https://ok.ru/profile/16606458438?utm_campaign=mobile_share&utm_content=profile'>
                            <img src={OK} alt='ok' />
                        </NavLink>
                        <NavLink className='footer__link_soc' 
                            to='https://t.me/krugosvetka_74'>
                            <img src={TG} alt='ok' />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;