import { Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";
import {
    RegisterButton,
    GoogleButton,
} from "./LoginModal.styles";
import type { LoginModalViewPropsInterface } from "./LoginModal.interface";
import { modalController } from "../modalController";
import {
    ModalOverlay,
    ModalContent,
    Form,
    Input,
    InputWrapper,
    EyeIcon,
    ErrorMsg,
    SubmitButton,
} from "../../common/commonStyles";
import { Divider } from "../RegisterModal/RegisterModal.styles";
import { CloseButton } from "../../common/elements";

export default function LoginModalView({
    closing,
    error,
    username,
    password,
    onUsernameChange,
    onPasswordChange,
    onSubmit,
    onClose,
    handleAnimationEnd,
    onRegisterClick,
    onGoogleLogin,
}: LoginModalViewPropsInterface) {

    const [showPassword, setShowPassword] = useState(false);



    return (
        <ModalOverlay
            $closing={closing}
            onPointerDown={modalController.handleOverlayClick(onClose)}
            onAnimationEnd={handleAnimationEnd}
        >
            <ModalContent $closing={closing} onClick={(e) => e.stopPropagation()}>
                <CloseButton onClose={onClose} />
                <h2>Iniciar Sesión</h2>
                {error && <ErrorMsg>{error}</ErrorMsg>}

                <Form onSubmit={onSubmit}>
                    <InputWrapper>
                        <Input
                            type="text"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => onUsernameChange(e.target.value)}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => onPasswordChange(e.target.value)}
                        />

                        <EyeIcon type="button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </EyeIcon>
                    </InputWrapper>

                    <SubmitButton type="submit">Entrar</SubmitButton>

                    <RegisterButton type="button" onClick={onRegisterClick}>
                        Regístrate
                    </RegisterButton>

                    <Divider>o</Divider>
                    <GoogleButton type="button" onClick={onGoogleLogin}>
                        Iniciar sesión con Google
                    </GoogleButton>
                </Form>
            </ModalContent>
        </ModalOverlay>
    );
}
