import './notFound.scss';

import error from '../../resources/img/404.svg';
import Menu from '../subComponents/menu/Menu';

interface INotFoundProps {
}

const NotFound: React.FunctionComponent<INotFoundProps> = (props) => {
  return (
    <div className='notFound'>
        <Menu color='black'/>
        <div className='notFound__img'>
            <img src={error} alt="error" />
        </div>
    </div>
  );
};

export default NotFound;
