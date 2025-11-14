import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const fadeOut = keyframes`from { opacity: 1; } to { opacity: 0; }`;
const scaleIn = keyframes`from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; }`;
const scaleOut = keyframes`from { transform: scale(1); opacity: 1; } to { transform: scale(0.8); opacity: 0; }`;



const ModalOverlay = styled.div<{ $closing?: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  animation: ${({ $closing }) => ($closing ? fadeOut : fadeIn)} 0.3s ease forwards;
`;

const ModalContent = styled.div<{ $closing?: boolean }>`
  background: white;
  padding: 40px;
  border-radius: 10px;
  width: 320px;
  max-width: 90%;
  color: #0b0c10;
  position: relative;
  text-align: center;

  animation: ${({ $closing }) => ($closing ? scaleOut : scaleIn)} 0.3s ease forwards;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #66fcf1;
  }
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`;

const EyeIcon = styled.button`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);

    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    display: flex;
    align-items: center;
`;


const ResgisterWrapper = styled.div``;
const RegisterButton = styled.button`
  width: 100%;
  padding: 10px 12px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover { background-color: #574fd6; }
`;

const SubmitButton = styled.button`
  padding: 10px 12px;
  background-color: #66fcf1;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  color: #0b0c10;
  font-weight: bold;

  &:hover {
    background-color: #52d1d8;
  }
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #999;
  font-size: 0.9rem;
  margin: 10px 0;

  pointer-events: none; /* No interactuable con el ratón */
  user-select: none;    /* No se puede seleccionar el texto */

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ccc;
  }
  &::before {
    margin-right: 10px;
  }
  &::after {
    margin-left: 10px;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  padding: 10px 12px;
  background-color: #4285F4;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #357ae8;
  }

  img {
    display: inline-block;
  }
`;

export {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Form,
  Input,
  InputWrapper,
  EyeIcon,
  ResgisterWrapper,
  RegisterButton,
  SubmitButton,
  ErrorMsg,
  Divider,
  GoogleButton,
};
