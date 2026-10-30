import { useLanguage } from '../context/LanguageContext';

// Chinese versions of illustrations that have English text drawn into them.
export const cnImages: Record<string, string> = {
  '/BG_AIMS_Target_Problem.webp': '/cn/BG_AIMS_Target_Problem.webp',
  '/related-iam.webp': '/cn/related-iam.webp',
  '/related-narrative.png': '/cn/related-narrative.webp',
  '/related-know-feel-act.png': '/cn/related-know-feel-act.webp',
  '/related-emotional-design.png': '/cn/related-emotional-design.webp',
  '/methodology-pipeline.webp': '/cn/methodology-pipeline.webp',
  '/design-process.webp': '/cn/design-process.webp',
  '/research-pattern-clustering-hd.png': '/cn/research-pattern-clustering-hd.webp',
  '/research-positioning.webp': '/cn/research-positioning.webp',
  '/service-benchmark-matrix.webp': '/cn/service-benchmark-matrix.webp',
  '/system-architecture-overview.webp': '/cn/system-architecture-overview.webp',
  '/system-architecture-detail.webp': '/cn/system-architecture-detail.webp',
  '/system-architecture-flow.webp': '/cn/system-architecture-flow.webp',
  '/docs/bauhinia-mind-architecture-diagram.png': '/cn/bauhinia-mind-architecture-diagram.webp',
  '/prototype-journey.webp': '/cn/prototype-journey.webp',
  '/smart-hospital/card-sorting-en.webp': '/cn/smart-hospital/card-sorting.webp',
  '/smart-hospital/mindmap-en.webp': '/cn/smart-hospital/mindmap.webp',
  '/smart-hospital/scale-path-en.webp': '/cn/smart-hospital/scale-path.webp',
  '/smart-hospital/layout-en.webp': '/cn/smart-hospital/layout.webp',
};

export function useLocalizedImage(src: string) {
  const { isCN } = useLanguage();
  return isCN ? cnImages[src] ?? src : src;
}
