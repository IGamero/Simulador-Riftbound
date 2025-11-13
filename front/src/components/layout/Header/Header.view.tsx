
import { Link } from "react-router-dom";
import type { HeaderInterface } from "./Header.interface";
import {
    HeaderContainer,
    Logo,
    LeftSection,
    RightSection,
    NavLink,
    NavBtn
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
                <Link
                    to="/home"
                    style={{ display: "flex", height: "100%", alignItems: "center" }}
                >
                    <Logo
                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?auto=format&fit=fill&q=80&w=300"
                        alt="Logo"
                    />
                </Link>
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
