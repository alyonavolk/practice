import * as React from 'react';
import './button.scss';

interface IButtonProps {
    children: string;
    type?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FunctionComponent<IButtonProps> = ({children, type = 'default', onClick}) => {
  return (
    <button className={`btn btn__${type}`} onClick={onClick}>{children}</button>
  );
};

export default Button;
