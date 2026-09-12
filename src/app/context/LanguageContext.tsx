import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type Language = 'en' | 'cn';

const LANGUAGE_STORAGE_KEY = 'portfolio-language';
// Keep translations available while the public site is English-only.
export const LANGUAGE_SWITCH_ENABLED = false;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  isCN: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (!LANGUAGE_SWITCH_ENABLED) return 'en';
  if (typeof window === 'undefined') return 'en';

  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage === 'en' || savedLanguage === 'cn') return savedLanguage;
  } catch {
    // Keep English as the default when storage is unavailable.
  }

  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [savedLanguage, setLanguageState] = useState<Language>(getInitialLanguage);
  const language = LANGUAGE_SWITCH_ENABLED ? savedLanguage : 'en';

  useEffect(() => {
    document.documentElement.lang = language === 'cn' ? 'zh-Hans' : 'en';
    document.documentElement.dataset.language = language;

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage write errors in private mode edge cases.
    }
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        if (LANGUAGE_SWITCH_ENABLED) setLanguageState(nextLanguage);
      },
      isCN: language === 'cn',
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'en' as const,
      setLanguage: () => {
        // noop outside provider
      },
      isCN: false,
    };
  }
  return context;
}
