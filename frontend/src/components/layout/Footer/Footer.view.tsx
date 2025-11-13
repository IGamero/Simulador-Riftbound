import type { FooterInterface } from "./Footer.interface";
import {
    FooterContainer
} from "./Footer.styles";


export default function FooterView({ year
}: FooterInterface) {

    return (
        <FooterContainer>
            IGamero@{year}
        </FooterContainer>
    );
}
