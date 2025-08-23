import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Avatar,
  Icon,
  type IconElement,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React from 'react';

const HeartIcon = (props: any): IconElement => (
  <Icon {...props} name="heart" style={{ width: 24, height: 24 }} />
);

const AvatarSimpleUsageShowcase = (): React.ReactElement => (
  <Avatar source={require('@assets/main.png')} />
);

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">HOME</Text>
    <HeartIcon />

    <AvatarSimpleUsageShowcase />
  </Layout>
);

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  </>
);
