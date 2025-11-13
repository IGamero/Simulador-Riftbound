import type { HeaderInterface } from "./Header.interface";
import {
    HeaderContainer,
    Logo,
    LeftSection,
    RightSection,
    NavLink,
    NavBtn,
    CustomLink
} from "./Header.styles";
import LoginModal from "../../Modals/LoginModal/LoginModal";


export default function HeaderView(
    {
        setIsModalOpen,
        isModalOpen
    }: HeaderInterface) {


    return (
        <HeaderContainer>
            <LeftSection>
                <CustomLink
                    to="/home"
                    style={{ display: "flex", height: "100%", alignItems: "center" }}
                >
                    <Logo
                        src="/images/riftboundLogo.webp" alt="riftboundLogo"
                    />
                </CustomLink>
            </LeftSection>

            <RightSection>
                <NavLink to="/cards">Cartas</NavLink>
                <NavLink to="/decks">Mazos</NavLink>
                <NavLink to="/play">Jugar</NavLink>
                <NavBtn onClick={() => setIsModalOpen(true)}>Iniciar Sesión</NavBtn>
            </RightSection>

            <LoginModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </HeaderContainer>
    );
}
