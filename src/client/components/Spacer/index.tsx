import styled from "styled-components";

export const Spacer = styled.div<{ height: number }>`
  height: ${({ height }) => height || "10px"}px;
`;
