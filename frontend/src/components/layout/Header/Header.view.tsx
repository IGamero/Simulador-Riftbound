import { useState } from "react";
import { HeaderContainer, LeftSection, RightSection, NavLink, NavBtn, Logo, CustomLink } from "./Header.styles";
import LoginModal from "../../Modals/LoginModal/LoginModal";
import RegisterModal from "../../Modals/RegisterModal/RegisterModal";

export default function HeaderView() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);


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

            {/* LoginModal */}
            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onRegisterClick={() => {
                    setIsLoginOpen(false); // cierra login
                    // setTimeout(() => setIsRegisterOpen(true), 300); // abre registro tras animación
                    setIsRegisterOpen(true)
                }}
            />

            {/* RegisterModal */}
            <RegisterModal
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
            />
        </HeaderContainer>
    );
}
