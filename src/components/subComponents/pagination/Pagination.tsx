import { useState } from 'react';
import './pagination.scss';

interface IPaginationProps {
    ordersPerPage: number;
    totalOrders: number;
    paginate: (page: number) => void;
}

const Pagination: React.FunctionComponent<IPaginationProps> = ({ordersPerPage, totalOrders, paginate}) => {
    const pageNumber = [];
    const [active, setActive] = useState(false);

    for (let i = 1; i <= Math.ceil(totalOrders/ordersPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div className='pagination'>
            {
                pageNumber.map((res) => (
                    <button key={res} onClick={() => paginate(res)}>
                        {res}
                    </button>
                ))
            }
        </div>
    );
};

export default Pagination;