import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Navigation } from './Navigation';

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Contact footer */}
      <div className="border-t border-border">
        <div className="page-container py-16">
          <div className="flex flex-wrap items-start justify-between gap-x-16 gap-y-8 lg:gap-x-24">
            <div className="flex min-w-0 flex-1 flex-wrap items-start justify-between gap-x-14 gap-y-6 sm:gap-x-16 lg:gap-x-24 xl:max-w-[72%]">
              <div className="flex min-w-[10rem] flex-col gap-1">
                <span className="font-semibold text-foreground tracking-wide uppercase font-['Work_Sans']" style={{ fontSize: '18px' }}>Email</span>
                <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '16px' }}>
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:appinlu@gmail.com" className="break-all hover:text-foreground transition-colors sm:break-normal">appinlu@gmail.com</a>
                </div>
              </div>
              <div className="flex min-w-[10rem] flex-col gap-1">
                <span className="font-semibold text-foreground tracking-wide uppercase font-['Work_Sans']" style={{ fontSize: '18px' }}>Phone</span>
                <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '16px' }}>
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+85265881993" className="whitespace-nowrap hover:text-foreground transition-colors">+852 6588 1993</a>
                </div>
              </div>
              <div className="flex min-w-[10rem] flex-col gap-1">
                <span className="font-semibold text-foreground tracking-wide uppercase font-['Work_Sans']" style={{ fontSize: '18px' }}>Follow Me</span>
                <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '16px' }}>
                  <Linkedin className="w-4 h-4 flex-shrink-0" />
                  <a href="https://www.linkedin.com/in/zhengping-lu-a03427381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap hover:text-foreground transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="ml-auto flex flex-shrink-0 flex-col items-end gap-1 text-muted-foreground" style={{ fontSize: '16px' }}>
              <span className="whitespace-nowrap">© 2026 Lu Zhengping.</span>
              <span className="whitespace-nowrap">Designed with care.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
