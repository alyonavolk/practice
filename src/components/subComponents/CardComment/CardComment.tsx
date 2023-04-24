import * as React from 'react';
import './cardComment.scss';

interface ICardCommentProps {
    imageAutor: string | undefined;
    nameAutor:string;
    comment:string
}

const CardComment: React.FunctionComponent<ICardCommentProps> = ({imageAutor, nameAutor, comment}) => {
  return (
    <div className="card_comment">
        <img src={imageAutor} alt="" />
        <p className="name_autor">{nameAutor}</p>
        <p className="comment">{comment}</p>
    </div>
  );
};

export default CardComment;
