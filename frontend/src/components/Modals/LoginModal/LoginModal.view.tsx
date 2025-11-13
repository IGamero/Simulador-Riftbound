import {
    ModalOverlay,
    ModalContent,
    CloseButton,
    Form,
    Input,
    SubmitButton,
    ErrorMsg,
    ResgisterWrapper,
    RegisterButton,
    Divider,
    GoogleButton,
} from "./LoginModal.styles";
import type { LoginModalViewPropsInterface } from "./LoginModal.interface";


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
    return (
        <ModalOverlay
            $closing={closing}
            onClick={onClose}
            onAnimationEnd={handleAnimationEnd}
        >
            <ModalContent $closing={closing} onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>×</CloseButton>
                <h2>Iniciar Sesión</h2>
                {error && <ErrorMsg>{error}</ErrorMsg>}

                <Form onSubmit={onSubmit}>
                    <Input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => onUsernameChange(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => onPasswordChange(e.target.value)}
                    />

                    <SubmitButton type="submit">Entrar</SubmitButton>
                    <ResgisterWrapper>
                        <RegisterButton type="button" onClick={onRegisterClick}>
                            Regístrate
                        </RegisterButton>
                    </ResgisterWrapper>

                    <Divider>o</Divider>
                    <GoogleButton type="button" onClick={onGoogleLogin}>
                        Iniciar sesión con Google
                    </GoogleButton>
                </Form>
            </ModalContent>
        </ModalOverlay>
    );
}
