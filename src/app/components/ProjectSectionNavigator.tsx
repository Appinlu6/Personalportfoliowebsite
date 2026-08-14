import { useEffect, useRef, useState } from 'react';

type ProjectSectionNavigatorProps = {
  contentSelector?: string;
  headingSelector?: string;
};

type SectionItem = {
  id: string;
  title: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function ProjectSectionNavigator({
  contentSelector = 'main article',
  headingSelector = 'h2',
}: ProjectSectionNavigatorProps) {
  const articleRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [sections, setSections] = useState<SectionItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const showNavigator = sections.length > 1;

  useEffect(() => {
    const article = document.querySelector(contentSelector) as HTMLElement | null;
    if (!article) return;
    articleRef.current = article;

    const headingElements = Array.from(article.querySelectorAll(headingSelector)).filter(
      (node): node is HTMLElement => node instanceof HTMLElement,
    );

    const preparedSections = headingElements
      .map((node, index) => {
        const title = node.textContent?.trim() ?? '';
        if (!title) return null;
        if (!node.id) node.id = `project-section-${index + 1}`;
        return { id: node.id, title };
      })
      .filter((item): item is SectionItem => Boolean(item));

    setSections(preparedSections);
  }, [contentSelector, headingSelector]);

  useEffect(() => {
    if (sections.length === 0) return;

    const article = articleRef.current ?? (document.querySelector(contentSelector) as HTMLElement | null);
    if (!article) return;

    const headingElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node instanceof HTMLElement);

    const updateState = () => {
      const articleTop = article.getBoundingClientRect().top + window.scrollY;
      const articleMax = Math.max(article.scrollHeight - window.innerHeight, 1);
      const articleProgress = clamp((window.scrollY - articleTop) / articleMax, 0, 1);
      setProgress(articleProgress);

      const threshold = window.innerHeight * 0.32;
      let nextActive = 0;
      for (let i = 0; i < headingElements.length; i += 1) {
        if (headingElements[i].getBoundingClientRect().top <= threshold) nextActive = i;
      }
      setActiveIndex(nextActive);
    };

    updateState();
    window.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState);
    return () => {
      window.removeEventListener('scroll', updateState);
      window.removeEventListener('resize', updateState);
    };
  }, [sections, contentSelector]);

  const scrollToProgress = (targetProgress: number) => {
    const article = articleRef.current;
    if (!article) return;
    const normalized = clamp(targetProgress, 0, 1);
    const articleTop = article.getBoundingClientRect().top + window.scrollY;
    const articleMax = Math.max(article.scrollHeight - window.innerHeight, 1);
    window.scrollTo({ top: articleTop + articleMax * normalized, behavior: 'auto' });
  };

  const updateFromClientY = (clientY: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const nextProgress = clamp((clientY - rect.top) / rect.height, 0, 1);
    setProgress(nextProgress);
    scrollToProgress(nextProgress);
  };

  const startDragging = (clientY: number) => {
    setIsExpanded(true);
    setIsDragging(true);
    updateFromClientY(clientY);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (event: MouseEvent) => {
      updateFromClientY(event.clientY);
    };
    const onMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging]);

  if (!showNavigator) return null;

  return (
    <div
      className="fixed left-0 top-1/2 z-50 hidden -translate-y-1/2 lg:block"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => {
        if (!isDragging) setIsExpanded(false);
      }}
    >
      <aside
        className={`rounded-r-2xl bg-white/78 backdrop-blur-md transition-all duration-300 ${
          isExpanded
            ? 'w-72 translate-x-0 p-3 shadow-[0_20px_40px_rgba(44,22,30,0.12)]'
            : 'w-5 translate-x-0 p-0.5 shadow-[0_8px_18px_rgba(44,22,30,0.10)]'
        }`}
      >
        <div className={`flex h-[min(65vh,34rem)] items-stretch ${isExpanded ? 'gap-3' : 'gap-0'}`}>
          <div
            className={`relative flex items-center py-5 ${
              isExpanded ? 'w-2 justify-center' : 'w-full justify-center'
            }`}
          >
            <div
              ref={trackRef}
              className="relative h-full w-[3px] cursor-ns-resize rounded-full bg-[rgba(122,16,35,0.14)]"
              onMouseDown={(event) => {
                event.preventDefault();
                startDragging(event.clientY);
              }}
            >
              <span
                className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-white bg-[var(--bm-red)] shadow"
                style={{ top: `calc(${progress * 100}% - 0.3125rem)` }}
                onMouseDown={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  startDragging(event.clientY);
                }}
              />
            </div>
          </div>

          <div
            className={`overflow-hidden transition-[width,opacity] duration-300 ${
              isExpanded ? 'w-60 opacity-100' : 'w-0 opacity-0'
            }`}
          >
            <div className="mb-2 px-1 text-[10px] uppercase tracking-[0.2em] text-[var(--bm-slate)]">
              Section Locator
            </div>
            <div className="max-h-full space-y-1 overflow-y-auto pr-1">
              {sections.map((section, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => {
                      const target = document.getElementById(section.id);
                      if (target) {
                        const targetTop = target.getBoundingClientRect().top + window.scrollY - 96;
                        window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'smooth' });
                      }
                    }}
                    className={`flex w-full items-start gap-3 rounded-lg px-2.5 py-2 text-left transition-colors ${
                      isActive
                        ? 'bg-[rgba(122,16,35,0.08)] text-[var(--bm-red)]'
                        : 'text-[var(--bm-slate)] hover:bg-[rgba(122,16,35,0.05)] hover:text-[var(--bm-burgundy)]'
                    }`}
                  >
                    <span className="pt-0.5 text-[10px] tracking-[0.2em]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="line-clamp-2 text-xs leading-relaxed">{section.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
