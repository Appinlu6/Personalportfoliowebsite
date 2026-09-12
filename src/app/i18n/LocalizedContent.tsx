import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';
import { useLanguage } from '../context/LanguageContext';

export type TranslationMap = Record<string, string>;

const translatableProps = ['alt', 'aria-label', 'caption', 'intro', 'label', 'note', 'title'] as const;

function normalize(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function translateString(value: string, translations: TranslationMap) {
  const normalized = normalize(value);
  if (!normalized) return value;
  return translations[normalized] ?? value;
}

function translateNode(node: ReactNode, translations: TranslationMap): ReactNode {
  if (typeof node === 'string') return translateString(node, translations);
  if (Array.isArray(node)) return node.map((child) => translateNode(child, translations));
  if (!isValidElement(node)) return node;

  const element = node as ReactElement<Record<string, unknown>>;
  const nextProps: Record<string, unknown> = {};

  for (const propName of translatableProps) {
    const propValue = element.props[propName];
    if (typeof propValue === 'string') {
      nextProps[propName] = translateString(propValue, translations);
    }
  }

  if ('children' in element.props) {
    nextProps.children = Children.map(element.props.children as ReactNode, (child) =>
      translateNode(child, translations),
    );
  }

  return cloneElement(element, nextProps);
}

export function LocalizedContent({
  children,
  translations,
}: {
  children: ReactNode;
  translations: TranslationMap;
}) {
  const { isCN } = useLanguage();
  return <>{isCN ? translateNode(children, translations) : children}</>;
}
