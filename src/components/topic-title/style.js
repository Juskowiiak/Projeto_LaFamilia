import styled from "styled-components";
import "../../Style/cores.css";
export const Title = styled.h5`
  color: var(--dark-1);
  margin-bottom: 3px;
  position: relative;
  display: inline-block;
  &::after {
    position: absolute;
    content: "";
    width: 120%;
    height: 1px;
    right: -140%;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--gold-3);
  }
`;
