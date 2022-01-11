import styled from "styled-components";
import {
  color,
  space,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from "styled-system";

const Box = styled.div`
  ${background};
  ${border};
  ${color};
  ${flexbox};
  ${grid};
  ${layout};
  ${shadow};
  ${space};
  ${typography};
  ${position};
`;

export default Box;
