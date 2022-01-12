import styled from "styled-components";
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

type StyledBaseButtonProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

const BaseButton = styled.button<StyledBaseButtonProps>(
  background,
  border,
  color,
  flexbox,
  layout,
  shadow,
  space,
  typography,
  position
);

export default BaseButton;
