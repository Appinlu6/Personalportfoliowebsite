import { Link, useLocation } from 'react-router';

export function Navigation() {
  const { pathname } = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Resume' },
    { path: '/work', label: 'Projects' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="page-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="tracking-tight">
            Lu Zhengping
          </Link>
          <ul className="flex items-center">
            {navItems.map((item, index) => (
              <li key={item.path} className="flex items-center">
                {index > 0 && <span className="w-px h-4 bg-border mx-6" />}
                <Link
                  to={item.path}
                  className="transition-colors"
                  style={{ color: isActive(item.path) ? '#985919' : undefined }}
                  onMouseEnter={e => { if (!isActive(item.path)) (e.currentTarget as HTMLElement).style.color = '#985919'; }}
                  onMouseLeave={e => { if (!isActive(item.path)) (e.currentTarget as HTMLElement).style.color = ''; }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
