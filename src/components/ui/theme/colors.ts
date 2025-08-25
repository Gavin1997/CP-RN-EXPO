// 主题颜色配置
export const themeColors = {
  // 主色调
  primary: '#FF7B1A',
  primaryLight: '#FFA766',
  primaryDark: '#CC5600',

  // 背景色
  background: '#FFFFFF',
  backgroundSecondary: '#F5F5F5',
  backgroundDark: '#1E1E1E',

  // 文本颜色
  textPrimary: '#333333',
  textSecondary: '#666666',
  textLight: '#999999',
  textDark: '#FFFFFF',

  // 边框颜色
  border: '#E5E5E5',
  borderLight: '#F0F0F0',
  borderDark: '#333333',

  // 状态颜色
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Tab bar 颜色
  tabBarActive: '#333',
  tabBarInactive: '#8E8E93',
  tabBarBackground: '#FFFFFF',
} as const;

// 颜色类型
export type ThemeColors = typeof themeColors;
