import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';
import DefaultLayout from './layout/DefaultLayout';
import { Helmet } from 'react-helmet';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        {
          routes.map((item, i) => {
            return (
              <Route key={i} path={item.path} element={
                <item.layout>
                  <Helmet>
                    <title>
                      {item.title}
                    </title>
                  </Helmet>
                  <item.component />
                </item.layout>
              } />
            )
          })
        }
      </Routes>
    </Suspense>
  );
}

export default App;
