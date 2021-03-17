import React, { Suspense } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import CustomText from 'components/CustomText';
import { CommonStackParamList } from 'screens';

const WebView = React.lazy(() =>
  import('react-native-webview').then((module) => ({
    default: module.WebView,
  })),
);

type ScreenRouteProp = RouteProp<CommonStackParamList, 'WebView'>;

const CustomWebView = () => {
  const { params } = useRoute<ScreenRouteProp>();

  const source = {
    uri: params?.url || 'https://reactnative.dev',
    title: params?.title || 'React Native template',
  };

  return (
    <Container style={{ flex: 1 }}>
      <Suspense fallback={<CustomText>Loading</CustomText>}>
        <WebView source={source} />
      </Suspense>
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
`;

export default CustomWebView;
