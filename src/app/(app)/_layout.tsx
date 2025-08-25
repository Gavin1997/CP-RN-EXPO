import { Redirect, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import { type SvgProps } from 'react-native-svg';

import { TabIcon } from '@/components/ui';
import {
  Cp,
  CPActive,
  Home,
  HomeActive,
  Info,
  InfoActive,
  Mine,
  MineActive,
  Movie,
  MovieActive,
} from '@/components/ui/icons';
import { useAuth, useIsFirstTime } from '@/lib';

const tabBarOptions = {
  tabBarLabelStyle: {
    fontSize: 12,
  },
  tabBarStyle: {
    height: 70,
    paddingBottom: 8,
    paddingTop: 0,
    borderTopWidth: 0, // 移除顶部边框
    elevation: 0, // 移除Android阴影
    shadowOpacity: 0, // 移除iOS阴影
  },
  tabBarActiveTintColor: '#333',
  tabBarActiveTintFontWeight: '500',
};

// Helper function to create tab bar icons with active/inactive states
function getTabBarIcon(
  ActiveIcon: React.ComponentType<SvgProps>,
  InactiveIcon?: React.ComponentType<SvgProps>
) {
  return ({ color, focused }: { color: string; focused: boolean }) => {
    // If no inactive icon is provided, use the active icon with color variation
    if (!InactiveIcon) {
      return <ActiveIcon color={color} />;
    }

    return (
      <TabIcon
        ActiveIcon={ActiveIcon}
        InactiveIcon={InactiveIcon}
        focused={focused}
        inactiveColor="#8E8E93"
      />
    );
  };
}

export default function TabLayout() {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  }
  if (status === 'signOut') {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs screenOptions={tabBarOptions}>
      <Tabs.Screen
        name="index"
        options={{
          title: '资讯',
          tabBarIcon: getTabBarIcon(InfoActive, Info),
        }}
      />
      <Tabs.Screen
        name="movie"
        options={{
          headerShown: false,
          title: '影视',
          tabBarIcon: getTabBarIcon(MovieActive, Movie),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: '主页',
          headerShown: false,
          tabBarIcon: getTabBarIcon(HomeActive, Home),
          tabBarButtonTestID: 'home-tab',
        }}
      />
      <Tabs.Screen
        name="cp"
        options={{
          title: 'CP',
          headerShown: false,
          tabBarIcon: getTabBarIcon(CPActive, Cp),
          tabBarButtonTestID: 'style-tab',
        }}
      />
      <Tabs.Screen
        name="mine"
        options={{
          title: '我的',
          headerShown: false,
          tabBarIcon: getTabBarIcon(MineActive, Mine),
          tabBarButtonTestID: 'settings-tab',
        }}
      />
    </Tabs>
  );
}
