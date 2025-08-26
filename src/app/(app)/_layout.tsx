import { BlurView } from 'expo-blur';
import { Redirect, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
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

import { tabBarOptions } from './styles';

// Blur background component for tab bar
function TabBarBackground() {
  return (
    <BlurView intensity={100} tint="light" style={StyleSheet.absoluteFill} />
  );
}

function getTabBarIcon(
  ActiveIcon: React.ComponentType<SvgProps>,
  InactiveIcon?: React.ComponentType<SvgProps>
) {
  return ({ color, focused }: { color: string; focused: boolean }) => {
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

// eslint-disable-next-line max-lines-per-function
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
  // if (status === 'signOut') {
  //   return <Redirect href="/login" />;
  // }

  return (
    <Tabs
      screenOptions={{
        animation: 'shift',
        ...tabBarOptions,
        tabBarBackground: () => <TabBarBackground />,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="info"
        options={{
          headerShown: false,
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
        name="index"
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
