import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './styles/index.css';

const HOME_PATHS = new Set(['/', '/index.html', '/Portfolio', '/portfolio']);

function normalizeEntryPath() {
  const { pathname, search, hash } = window.location;

  if (HOME_PATHS.has(pathname)) {
    if (pathname !== '/') {
      window.history.replaceState(null, '', `/${search}${hash}`);
    }
    return;
  }

  const trimmed = pathname.replace(/\/+$/, '');
  if (trimmed === '') {
    window.history.replaceState(null, '', `/${search}${hash}`);
  }
}

normalizeEntryPath();

createRoot(document.getElementById('root')!).render(<App />);
