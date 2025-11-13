import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding: 0 40px;
  background-color: grey;
  color: white;

  position: fixed;  // fijo al viewport
  bottom: 0;        // pegado abajo
  left: 0;
  width: 100%;      // ocupa todo el ancho
`;

export { FooterContainer }
