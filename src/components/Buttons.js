import styled from "styled-components/macro";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale, primary, neutral } from "../utils";

const BUTTON_MODIFIERS = {
  small: () => `
      font-size: ${typeScale.helperText};
      padding: 8px;
    `,

  large: () => `
      font-size: ${typeScale.header5};
      padding: 16px 24px;
    `,

  warning: ({ props }) => `
      background: none;
      color: ${props.status.warningColor};
      &:hover, &:focus {
        background-color: ${props.status.warningColorHover};
      }
  
      &:active {
        background-color: ${props.status.warningColorActive};
      }
    `,

  error: ({ props }) => `
      background: none;
      color: ${props.status.errorColor};
      &:hover, &:focus {
        background-color: ${props.status.errorColorHover};
        border: 2px solid transparent;
      }
      &:active {
        background-color: ${props.status.errorColorActive};
      }
    `,

  success: ({ props }) => `
      background: none;
      color: ${props.status.successColor};
      &:hover, &:focus {
        background-color: ${props.status.successColorHover};
        border: 2px solid transparent;
      }
      &:active {
        background-color: ${props.status.successColorActive};
      }
    `,
};

export const Button = styled.button`
  padding: 6px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 10px;
  border: none;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear,
    border 0.2s linear;

  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.5);
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${(props) => props.theme.disabled};
    border: none;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const PrimaryButton = styled(Button)`
  background-color: ${primary[200]};
  color: ${primary[300]};

  &:hover {
    background-color: ${primary[500]};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  color: ${neutral[100]};
  background: ${neutral[400]};

  &:hover {
    background-color: ${neutral[500]};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const GhostButton = styled(Button)`
  border: 2px solid ${primary[200]};
  background: ${neutral[100]};
  color: ${primary[200]};

  &:hover {
    background-color: ${primary[200]};
    color: ${neutral[100]};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
