import { Link, useLocation } from 'react-router';
import { LANGUAGE_SWITCH_ENABLED, useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const { pathname } = useLocation();
  const { isCN, language, setLanguage } = useLanguage();

  const navItems = [
    { path: '/', label: isCN ? '首页' : 'Home' },
    { path: '/about', label: isCN ? '简历' : 'Resume' },
    { path: '/work', label: isCN ? '项目' : 'Projects' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="page-container py-4">
        <div className="flex min-w-0 items-center justify-between gap-4">
          <Link to="/" className="hidden tracking-tight sm:block">
            Lu Zhengping
          </Link>
          <div className="ml-auto flex min-w-0 items-center gap-5 sm:gap-8">
            <ul className="flex items-center">
            {navItems.map((item, index) => (
              <li key={item.path} className="flex items-center">
                {index > 0 && <span className="mx-3 h-4 w-px bg-border sm:mx-6" />}
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
          {LANGUAGE_SWITCH_ENABLED && (
            <button
              type="button"
              aria-label={isCN ? 'Switch to English' : '切换为中文'}
              onClick={() => setLanguage(language === 'cn' ? 'en' : 'cn')}
              className="inline-flex h-7 shrink-0 cursor-pointer items-center gap-0.5 whitespace-nowrap rounded-full px-1.5 text-[10px] leading-none transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#666666]"
            >
              <span lang="zh-Hans" className={isCN ? 'font-medium text-[#404040]' : 'text-[#9a9a9a]'}>中</span>
              <span aria-hidden="true" className="text-[#c4c4c4]">/</span>
              <span lang="en" className={isCN ? 'text-[#9a9a9a]' : 'font-medium text-[#404040]'}>EN</span>
            </button>
          )}
          </div>
        </div>
      </div>
    </nav>
  );
}
