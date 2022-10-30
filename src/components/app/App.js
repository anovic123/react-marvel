import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicPage'));
const SingleCharacterLayout = lazy(() =>
  import('../pages/singleCharacterLayout/SingleCharacterLayout'),
);
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="react-marvel/" element={<MainPage />} />
              <Route path="react-marvel/comics" element={<ComicsPage />} />
              <Route
                path="react-marvel/comics/:id"
                element={<SinglePage Component={SingleComicLayout} dataType="comic" />}
                dataType="comic"
              />
              <Route
                path="react-marvel/characters/:id"
                element={<SinglePage Component={SingleCharacterLayout} dataType="character" />}
                dataType="character"
              />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
