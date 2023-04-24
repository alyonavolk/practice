import * as React from 'react';
import './formSearch.scss';

interface IFormSearchProps {
}

const FormSearch: React.FunctionComponent<IFormSearchProps> = (props) => {
  return (
    <div className='form_search'>
        <form action="">
            <p>Откуда</p>
            <select name="" id="">
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
            <p>Куда</p>
            <select name="" id="">
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
            <p>Дата</p>     <input type="date" />
            <p>Длительность</p>
            <select name="" id="">
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
            <p>Кол-во человек</p>   <input type="text" />
            <p>Вид</p>
            <select name="" id="">
                <option value="">тематическая программа</option>
                <option value="">сюжетная программа</option>
                <option value="">квест</option>
                <option value="">поездка</option>
                <option value="">экскурсия</option>
                <option value="">детский</option>
                <option value="">активный</option>
            </select>
            <button className='btn'>Найти туры</button>
        </form>
    </div>
  );
};

export default FormSearch;
