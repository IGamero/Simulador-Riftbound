import FooterView from "./Footer.view";

export default function Header() {
    const year = new Date().getFullYear(); // obtiene el año actual

    return (
        <FooterView
            year={year}
        />
    );
}


