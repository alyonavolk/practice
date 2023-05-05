import * as React from 'react';
import './articlePage.scss';
import Menu from '../subComponents/menu/Menu';


interface IArticleProps {
    nameArticle: string,
    mainImg: string,
    firstImg: string, 
    secondImg: string,
    firstP: React.ReactNode,
    secondP: React.ReactNode
}

const Article: React.FunctionComponent<IArticleProps> = ({nameArticle, mainImg, firstImg, secondImg, firstP, secondP}) => {
  return (
    <div className='article'>
        <Menu color='black' />
        <h1>{nameArticle}</h1>
        <img src={mainImg} alt="" className='main_img'/>
        <div className='article__opisanie'>
            <div className='opisanie_blok'>
                <div className='opisanie_blok__img'><img src={firstImg} alt="" className='image'/></div>
                <div className='paragraf'>{firstP}</div>
            </div>
            <div className='opisanie_blok'>
                <div className='opisanie_blok__img'><img src={secondImg} alt="" className='image'/></div>
                <div className='paragraf'>{secondP}</div>
            </div>
        </div>
    </div>
  );
};

export default Article;

