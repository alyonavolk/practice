import * as React from 'react';
import './articles.scss';
import CardArticle from '../subComponents/CardArticle/CardArticle';
import Article1 from '../../resources/img/article2-1.jpg';
import Article2 from '../../resources/img/article3-2.jpg';
import Article3 from '../../resources/img/article1-3.jpg';
import Menu from '../subComponents/menu/Menu';
import { ROUTES } from '../ROUTES';

interface IArticlesPageProps {
}

const ArticlesPage: React.FunctionComponent<IArticlesPageProps> = (props) => {
  return (
    <div className="articles">
        <Menu color='black' />
        <h1>Статьи</h1>
        <div className='articles__blok'>
            <div>
                <CardArticle image={Article1} nameArticle='Где отдохнуть в зимние выходные?' link={ROUTES.article2}/>
                <CardArticle image={Article2} nameArticle='Фестиваль Уральские валенки в г. Куса' link={ROUTES.article1}/>
                <CardArticle image={Article3} nameArticle='Музей пельменя г. Миасс' link={ROUTES.article3}/>
            </div>
        </div>
    </div>
  );
};

export default ArticlesPage;
