import styled from "styled-components";

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #999;
  font-size: 0.9rem;
  margin: 10px 0;

  pointer-events: none; 
  user-select: none;  

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
  Divider,
  GoogleButton,
};
