import { useMemo, useState } from 'react';
import './tours.scss';
import CardTours from '../subComponents/CardTours/CardTours';
import Menu from '../subComponents/menu/Menu';

import Cards from '../../resources/Cards.json';
import Button from '../subComponents/button/Button';
import Pagination from '../subComponents/pagination/Pagination';

interface IToursProps {
}

const Tours: React.FunctionComponent<IToursProps> = (props) => {
    const [value, setValue] = useState('');

    const [card, setCard] = useState(Cards);
    const [filt, setFilt] = useState(card);

    const [currentPage, setCurrentPage] = useState(1);
    const OrdersPerPage = 10;
    const lastOrdersIndex = currentPage * OrdersPerPage;
    const firstOrdersIndex = lastOrdersIndex - OrdersPerPage;
    const currentOrders = filt.slice(firstOrdersIndex, lastOrdersIndex);

    const paginate = (page: number) => {
        setCurrentPage(page);
    }

    const filtSearch = () => {
        setCard(Cards);
        setFilt(card.filter(item => item.title.toLowerCase().includes(value)));
    }



  return (
    <div className='tours'>
        <Menu color='black' />
        <h3 className='tours__title'>Маршруты</h3>
        <div className='tours__search'>
            <input className='tours__search_input' 
            value={value} placeholder='Введите название маршрута...'
            onChange={(e) => setValue(e.target.value)} />
            <Button type='tours-search' onClick={filtSearch}>Найти</Button>
        </div>
        <div className='tours__sort'>

        </div>
        <div className='tours__cards'>
            {currentOrders.map((val) => 
                <CardTours key={val.id} img={val.img} title={val.title} 
                    description={val.description} time={val.time}
                    place={val.place} price={val.price} like={val.like}
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
