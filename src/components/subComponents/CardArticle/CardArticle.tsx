import * as React from 'react';
import './cardArticle.scss';
import { NavLink } from 'react-router-dom';

interface ICardArticleProps {
    image: string | undefined;
    nameArticle: string;
    link: string;
}

const CardArticle: React.FunctionComponent<ICardArticleProps> = ({image, nameArticle, link}) => {
  return (
  <NavLink className='card_article' to={link}>
    <img src={image}/>
    <p>{nameArticle}</p>
  </NavLink>
  );
};

export default CardArticle;
