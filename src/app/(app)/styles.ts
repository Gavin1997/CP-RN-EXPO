import { Platform, StyleSheet } from 'react-native';

export const tabLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarStyle: {
    height: 70,
    paddingBottom: 8,
    paddingTop: 0,
    borderTopWidth: 0, // 移除顶部边框
    position: 'absolute',
    backgroundColor: 'transparent', // 设为透明，让BlurView处理背景
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 1,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  tabBarLabelStyle: {
    fontSize: 12,
  },
});

export const tabBarOptions = {
  tabBarLabelStyle: tabLayoutStyles.tabBarLabelStyle,
  tabBarStyle: tabLayoutStyles.tabBarStyle,
  tabBarActiveTintColor: '#333',
  tabBarActiveTintFontWeight: '500' as const,
};

export const styles = StyleSheet.create({
  container_info: {
    flex: 1,
    backgroundColor: '#F0F4FF',
  },
});
