import { createBrowserRouter, Navigate } from 'react-router';
import { Root } from './components/Root';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

function RedirectHome() {
  return <Navigate to="/" replace />;
}

export const router = createBrowserRouter(
  [
    { path: '/index.html', Component: RedirectHome },
    { path: '/Portfolio', Component: RedirectHome },
    { path: '/portfolio', Component: RedirectHome },
    {
      path: '/',
      Component: Root,
      children: [
        { index: true, Component: HomePage },
        { path: 'work', Component: WorkPage },
        { path: 'work/:slug', Component: ProjectDetailPage },
        { path: 'about', Component: AboutPage },
      ],
    },
    {
      path: '*',
      Component: NotFoundPage,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
