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
          {LANGUAGE_SWITCH_ENABLED && <div
            className="flex shrink-0 items-center gap-1 whitespace-nowrap"
            role="group"
            aria-label={isCN ? '语言选择' : 'Language selection'}
          >
            {(['en', 'cn'] as const).map((option) => {
              const isActive = language === option;
              return (
                <span key={option} className="flex items-center gap-1">
                  {option === 'cn' && <span aria-hidden="true" className="text-[11px] text-[#a0a0a0]">/</span>}
                  <button
                  type="button"
                  lang={option === 'cn' ? 'zh-Hans' : 'en'}
                  aria-pressed={isActive}
                  aria-label={option === 'cn' ? '切换为中文' : 'Switch to English'}
                  onClick={() => setLanguage(option)}
                  className={`min-h-8 cursor-pointer rounded-sm px-1 text-[12px] leading-none transition-colors hover:text-[#404040] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#666666] ${
                    isActive ? 'font-medium text-[#5f5f5f]' : 'font-normal text-[#777777]'
                  }`}
                >
                  {option === 'cn' ? '中' : 'EN'}
                  </button>
                </span>
              );
            })}
          </div>}
          </div>
        </div>
      </div>
    </nav>
  );
}
