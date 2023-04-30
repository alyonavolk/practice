import * as React from 'react';
import './formSearch.scss';

interface IFormSearchProps {
}

const FormSearch: React.FunctionComponent<IFormSearchProps> = (props) => {
  return (
    <div className='form_search'>
        <form action="">
            <div className="top_line">
                <div className='form_from'><p>Откуда</p>
                    <select name="" id="city" className='city'>
                        <option value="" className="name_option">Челябинск</option>
                        <option value="">Екатеринбург</option>
                        <option value="">Миасс</option>
                        <option value="">Златоуст</option>
                        <option value="">Пермь</option>
                        <option value="">Кунгур</option>
                        <option value="">Троицк</option>
                        <option value="">Чебаркуль</option>
                        <option value="">Зюраткуль</option>
                        <option value="">Таганай</option>
                    </select>
                </div>
                <div className='form_from'><p>Куда</p>
                    <select name="" id="city">
                        <option value="">Челябинск</option>
                        <option value="">Екатеринбург</option>
                        <option value="">Миасс</option>
                        <option value="">Златоуст</option>
                        <option value="">Пермь</option>
                        <option value="">Кунгур</option>
                        <option value="">Троицк</option>
                        <option value="">Чебаркуль</option>
                        <option value="">Зюраткуль</option>
                        <option value="">Таганай</option>
                    </select>
                </div>
                <div className='form_date'> <p>Дата</p>     <input type="date" id='date'/></div>
            </div>
            <div className="top_line">
                <div className='form_days'><p>Длительность</p>
                    <select name="" id="days">
                        <option value="">1 день</option>
                        <option value="">2 дня</option>
                        <option value="">3 дня</option>
                        <option value="">4 дня</option>
                        <option value="">5 дней</option>
                        <option value="">6 дней</option>
                        <option value="">7 дней</option>
                        <option value="">8 дней</option>
                        <option value="">9 дней</option>
                    </select>
                </div>
                <div><p>Кол-во человек</p>   <input type="number"  min="1" id='count'/></div>
                <div className='form_type'><p>Вид</p>
                    <select name="" id="type">
                        <option value="">тематическая программа</option>
                        <option value="">сюжетная программа</option>
                        <option value="">квест</option>
                        <option value="">поездка</option>
                        <option value="">экскурсия</option>
                        <option value="">детский</option>
                        <option value="">активный</option>
                    </select>
                </div>
                <div className="blok_button"><button className='btn button'>Найти туры</button></div>
            </div>
        </form>
    </div>
  );
};

export default FormSearch;
