import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <p className="text-muted-foreground mb-2">404</p>
        <h1 className="mb-6" style={{ fontSize: '2rem' }}>Page not found</h1>
        <Link to="/" className="underline" style={{ color: 'var(--warm-accent)' }}>
          Go home
        </Link>
      </div>
    </div>
  );
}
