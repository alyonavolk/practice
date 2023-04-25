import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from '../ROUTES';

import MainPage from '../mainPage/MainPage';
import Tours from '../Tours/Tours';
import ArticlesPage from '../ArticlePage/ArticlesPage';
import AboutPage from '../AboutPage/AboutPage';
import NotFound from '../NotFound/NotFound';
import TourPage from '../TourPage/TourPage';


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
        <Route path={ROUTES.about}
        element={
          <AboutPage />
        } />
        <Route path={ROUTES.articles}
        element={
          <ArticlesPage />
        } />
        <Route path={ROUTES.contacts}
        element={
          <NotFound />
        } />
        <Route path={ROUTES.cart}
        element={
          <NotFound />
        } />
        <Route path={ROUTES.favourites}
        element={
          <NotFound />
        } />
        <Route path={ROUTES.profile}
        element={
          <NotFound />
        } />
        <Route path={ROUTES.article1}
        element={
          <NotFound />
        } />
        <Route path={ROUTES.article2}
        element={
          <NotFound />
        } />
        <Route path={ROUTES.article3}
        element={
          <NotFound />
        } />
        <Route path={ROUTES.tour}
        element={
          <TourPage />
        } />
    </Routes>
  );
};

export default RoutesPage;
