import { useState } from "react";
import { HeaderContainer, LeftSection, RightSection, NavLink, NavBtn, Logo, CustomLink } from "./Header.styles";
import LoginModal from "../../Modals/LoginModal/LoginModal";
import RegisterModal from "../../Modals/RegisterModal/RegisterModal";

export default function HeaderView() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const openRegisterWithDelay = () => {
        setIsLoginOpen(false); // inicia cierre del login
        setTimeout(() => setIsRegisterOpen(true), 300); // abre registro tras animación de cierre
    };

    return (
        <HeaderContainer>
            <LeftSection>
                <CustomLink to="/home" style={{ display: "flex", height: "100%", alignItems: "center" }}>
                    <Logo src="/images/riftboundLogo.webp" alt="riftboundLogo" />
                </CustomLink>
            </LeftSection>

            <RightSection>
                <NavLink to="/cards">Cartas</NavLink>
                <NavLink to="/decks">Mazos</NavLink>
                <NavLink to="/play">Jugar</NavLink>
                <NavBtn onClick={() => setIsLoginOpen(true)}>Iniciar Sesión</NavBtn>
            </RightSection>

            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onRegisterClick={openRegisterWithDelay}
            />

            <RegisterModal
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
            />
        </HeaderContainer>
    );
}
