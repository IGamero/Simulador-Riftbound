import styled from "styled-components";

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
  RegisterButton,
  GoogleButton,
};
