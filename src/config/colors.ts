export const colors = {
  bgDark: '#0a0a0a',
  hardware: '#0066ff',
  software: '#00ff66',
  mechanical: '#ff6600',
  text: '#f5f5f5',
  textSecondary: '#a0a0a0',
  cardBg: '#1a1a1a',
};

export type Category = 'hardware' | 'software' | 'mechanical' | 'all';

export const categoryColors: Record<Exclude<Category, 'all'>, string> = {
  hardware: colors.hardware,
  software: colors.software,
  mechanical: colors.mechanical,
};

