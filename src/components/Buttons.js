import styled from "styled-components/macro";
import { applyStyleModifiers } from "styled-components-modifiers";
import { defaultTheme, typeScale } from "../utils";

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
        outline: 3px solid ${props.status.warningColorHover};
        outline-offset: 2px;
        border: 2px solid transparent;
      }
  
      &:active {
        background-color: ${props.status.warningColorActive};
      }
    `,

  primaryButtonWarning: ({ props }) => `
      background-color: ${props.status.warningColor};
      color: ${props.textColorInverted};
    `,

  secondaryButtonWarning: ({ props }) => `
      border: 2px solid ${props.status.warningColor};
    `,

  error: ({ props }) => `
      background: none;
      color: ${props.status.errorColor};
      &:hover, &:focus {
        background-color: ${props.status.errorColorHover};
        outline: 3px solid ${props.status.errorColorHover};
        outline-offset: 2px;
        border: 2px solid transparent;
      }
      &:active {
        background-color: ${props.status.errorColorActive};
      }
    `,

  primaryButtonError: ({ props }) => `
      background-color: ${props.status.errorColor};
      color: ${props.textColorInverted};
    `,

  secondaryButtonError: ({ props }) => `
      border: 2px solid ${props.status.warningColor};
    `,

  success: ({ props }) => `
      background: none;
      color: ${props.status.successColor};
      &:hover, &:focus {
        background-color: ${props.status.successColorHover};
        outline: 3px solid ${props.status.successColorHover};
        outline-offset: 2px;
        border: 2px solid transparent;
      }
      &:active {
        background-color: ${props.status.successColorActive};
      }
    `,

  primaryButtonSuccess: ({ props }) => `
      background-color: ${props.status.successColor};
      color: ${props.textColorInverted};
    `,

  secondaryButtonSuccess: ({ props }) => `
      border: 2px solid ${props.status.warningColor};
    `,
};

export const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear,
    border 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
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
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  border: 2px solid transparent;

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    border-color: ${(props) => props.theme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};

  &:disabled {
    border: 2px solid ${(props) => props.theme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${(props) => props.theme.primaryColor};

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
