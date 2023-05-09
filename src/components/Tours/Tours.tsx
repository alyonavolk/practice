import { useState, useEffect } from 'react';
import './tours.scss';
import CardTours from '../subComponents/CardTours/CardTours';
import Menu from '../subComponents/menu/Menu';

import Cards from '../../resources/Cards.json';
import Button from '../subComponents/button/Button';
import Pagination from '../subComponents/pagination/Pagination';
import { ROUTES } from '../ROUTES';

const view = [
    {id: 1, content: 'Вид', title: 'active'},
    {id: 2, content: 'тематическая программа', title: ''},
    {id: 3, content: 'сюжетная программа', title: ''},
    {id: 4, content: 'квест', title: ''},
    {id: 5, content: 'поездка', title: ''},
    {id: 6, content: 'экскурсия', title: ''},
    {id: 7, content: 'детский', title: ''},
    {id: 8, content: 'активный', title: ''}
]

const Tours: React.FC = (props) => {
    const [value, setValue] = useState('');

    const [card, setCard] = useState(Cards);
    const [filt, setFilt] = useState(card);
    const [pagin, setPagin] = useState(filt);
    const [viewSelect, setViewSelect] = useState('Вид');
    const [like, setLike] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const OrdersPerPage = 10;
    const lastOrdersIndex = currentPage * OrdersPerPage;
    const firstOrdersIndex = lastOrdersIndex - OrdersPerPage;
    const currentOrders = pagin.slice(firstOrdersIndex, lastOrdersIndex);

    const paginate = (page: number) => {
        setCurrentPage(page);
    }

    const filtSearch = () => {
        setCard(Cards);
        setFilt(card.filter(item => item.title.toLowerCase().includes(value.toLowerCase().trim())));
        setCurrentPage(1);
    }

    const filtView = () => {
        if (viewSelect !== 'Вид') {
            setCard(Cards);
            setFilt(card.filter(item => item.description === viewSelect));
            setCurrentPage(1);
            console.log(viewSelect);
            console.log('filt', filt);
            console.log('pagin', pagin);
        } else {
            setCard(Cards);
            setFilt(card);
            setCurrentPage(1);
        }
    }

    useEffect(() => {
        setPagin(filt);
    }, [filt]);

    useEffect(() => {
        filtView();
    }, [viewSelect]);

  return (
    <div className='tours'>
        <Menu color='black' />
        <h3 className='tours__title'>Маршруты</h3>
        <div className='tours__search'>
            <input className='tours__search_input' 
            value={value} placeholder='Введите название...'
            onChange={(e) => setValue(e.target.value)} />
            <Button type='tours-search' onClick={filtSearch}>Найти</Button>
        </div>
        <div className='tours__sort'>
            <input className='tours__date' type='date' />
            <select className='tours__select' 
                name="" id="" 
                onChange={(e) => { setViewSelect(e.target.value);}}
            >
                {view.map((val) => (
                    <option key={val.id} value={val.content}
                    className={`${val.title}`}>
                        {val.content}
                    </option>
                ))}
            </select>
            <select className='tours__select' name="" id="">
                <option className='active'>Место</option>
                <option>Челябинск</option>
                <option>Екатеринбург</option>
                <option>Миасс</option>
                <option>Златоуст</option>
                <option>Пермь</option>
                <option>Кунгур</option>
                <option>Троицк</option>
                <option>Чебаркуль</option>
                <option>Зюраткуль</option>
                <option>Таганай</option>
            </select>
            <select className='tours__select' name="" id="">
                <option className='active'>Цена</option>
            </select>
        </div>
        <div className='tours__cards'>
            {currentOrders.map((val) => 
                <CardTours key={val.id} link={ROUTES.tour} 
                    img={val.img} title={val.title} 
                    description={val.description} time={val.time}
                    place={val.place} price={val.price} like={val.like}
                    onClick={() => {val.like = !val.like; setLike(!like)}}
                />
            )}
        </div>
        <div className='tours__pagination'>
            <Pagination
            totalOrders={filt.length} 
            ordersPerPage={OrdersPerPage}
            paginate={paginate} />
        </div>
    </div>
  );
};

export default Tours;
