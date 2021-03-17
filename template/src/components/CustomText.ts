import styled, { css } from 'styled-components/native';
import { space, SpaceProps, layout, LayoutProps, compose, typography, TypographyProps } from 'styled-system';
import { BLACK } from 'utils/colors';

interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
  flex?: number | string;
  color?: string;
  capitalize?: boolean;
  underline?: boolean;
  debug?: boolean;
  opacity?: number;
}

const CustomText = styled.Text<TextProps>`
  ${compose(space, layout, typography)}
  opacity: ${({ opacity }) => opacity};
  ${({ debug }) =>
    debug
      ? css`
          border: 1px solid red;
        `
      : css``};
  text-align-vertical: center;
  text-decoration-line: ${({ underline }) => (underline ? 'underline' : 'none')};
  color: ${({ color }) => color};
  ${({ capitalize }) =>
    capitalize
      ? css`
          text-transform: capitalize;
        `
      : ''}
`;

CustomText.defaultProps = {
  color: BLACK,
  fontSize: 18,
  fontWeight: '600',
  capitalize: false,
  textAlign: 'left',
  underline: false,
  opacity: 1,
};

export default CustomText;
