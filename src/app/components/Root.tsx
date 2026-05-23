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
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-[84px] -ml-6">
              <div className="flex flex-col gap-1 whitespace-nowrap">
                <span className="font-semibold text-foreground tracking-wide uppercase font-['Work_Sans']" style={{ fontSize: '18px' }}>Email</span>
                <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '16px' }}>
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:appinlu@gmail.com" className="hover:text-foreground transition-colors">appinlu@gmail.com</a>
                </div>
              </div>
              <div className="flex flex-col gap-1 whitespace-nowrap">
                <span className="font-semibold text-foreground tracking-wide uppercase font-['Work_Sans']" style={{ fontSize: '18px' }}>Phone</span>
                <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '16px' }}>
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+85265881993" className="hover:text-foreground transition-colors">+852 6588 1993</a>
                </div>
              </div>
              <div className="flex flex-col gap-1 whitespace-nowrap">
                <span className="font-semibold text-foreground tracking-wide uppercase font-['Work_Sans']" style={{ fontSize: '18px' }}>Follow Me</span>
                <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '16px' }}>
                  <Linkedin className="w-4 h-4 flex-shrink-0" />
                  <a href="https://www.linkedin.com/in/zhengping-lu-a03427381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 text-muted-foreground" style={{ fontSize: '16px' }}>
              <span>© 2026 Lu Zhengping.</span>
              <span>Designed with care.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
