import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../ROUTES';
import MainPage from '../mainPage/MainPage';
import Tours from '../Tours/Tours';

interface IRoutesPageProps {
}

const RoutesPage: React.FunctionComponent<IRoutesPageProps> = () => {
  return (
    <Routes>
        <Route path={ROUTES.main} 
        element={(
            <MainPage />
        )} />
        <Route path={ROUTES.tours} 
        element={(
            <Tours />
        )} />
        {/* <Route path={ROUTES.main} 
        element={(
            <MainPage />
        )} /> */}
    </Routes>
  );
};

export default RoutesPage;
