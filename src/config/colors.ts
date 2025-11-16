export const colors = {
  bgDark: '#161514',
  hardware: '#0066ff',
  software: '#00cc52',
  mechanical: '#ff6600',
  text: '#f5f5f5',
  textSecondary: '#a0a0a0',
  cardBg: '#1a1a1a',
};
//#0c0804
//#05040c
export type Category = 'hardware' | 'software' | 'mechanical' | 'all';

export const categoryColors: Record<Exclude<Category, 'all'>, string> = {
  hardware: colors.hardware,
  software: colors.software,
  mechanical: colors.mechanical,
};

