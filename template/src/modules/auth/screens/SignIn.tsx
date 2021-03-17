import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from 'components/CustomText';
import { useTranslation } from 'react-i18next';

const SignIn = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <CustomText fontWeight={'700'} textAlign={'center'}>
        {t('SignIn')}
      </CustomText>
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export default SignIn;
