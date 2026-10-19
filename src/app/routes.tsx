import { createBrowserRouter, Navigate, useParams } from 'react-router';
import { Root } from './components/Root';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { MountainLabPage } from './pages/MountainLabPage';

function RedirectHome() {
  return <Navigate to="/" replace />;
}

function RedirectProject() {
  const { slug } = useParams();
  return <Navigate to={slug ? `/work/${slug}` : '/work'} replace />;
}

export const router = createBrowserRouter(
  [
    { path: '/index.html', Component: RedirectHome },
    { path: '/Portfolio', Component: RedirectHome },
    { path: '/portfolio', Component: RedirectHome },
    { path: '/lab/mountain', Component: MountainLabPage },
    {
      path: '/',
      Component: Root,
      children: [
        { index: true, Component: HomePage },
        { path: 'work', Component: WorkPage },
        { path: 'work/:slug', Component: ProjectDetailPage },
        { path: 'projects', Component: RedirectProject },
        { path: 'projects/:slug', Component: RedirectProject },
        { path: 'about', Component: AboutPage },
        { path: '*', Component: NotFoundPage },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
