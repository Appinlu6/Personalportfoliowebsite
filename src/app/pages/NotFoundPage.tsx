import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

export function NotFoundPage() {
  const { isCN } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <p className="text-muted-foreground mb-2">404</p>
        <h1 className="mb-6" style={{ fontSize: '2rem' }}>{isCN ? '页面不存在' : 'Page not found'}</h1>
        <Link to="/" className="underline" style={{ color: 'var(--warm-accent)' }}>
          {isCN ? '返回首页' : 'Go home'}
        </Link>
      </div>
    </div>
  );
}
