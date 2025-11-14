import {
    ModalOverlay,
    ModalContent,
    CloseButton,
    Form,
    Input,
    SubmitButton,
    ErrorMsg,
} from "./RegisterModal.styles";
import type { RegisterModalViewPropsInterface } from "./RegisterModal.interface";


export default function RegisterModalView({
    closing,
    error,
    username,
    password,
    email,
    confirmPassword,
    onUsernameChange,
    onPasswordChange,
    onEmailChange,
    onConfirmPasswordChange,
    onSubmit,
    onClose,
    handleAnimationEnd,
}: RegisterModalViewPropsInterface) {
    return (
        <ModalOverlay
            $closing={closing}
            onClick={onClose}
            onAnimationEnd={handleAnimationEnd}
        >
            <ModalContent $closing={closing} onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>×</CloseButton>
                <h2>Regístrarse</h2>
                {error && <ErrorMsg>{error}</ErrorMsg>}

                <Form onSubmit={onSubmit}>
                    <Input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => onUsernameChange(e.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => onEmailChange(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => onPasswordChange(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Confirmar Contraseña"
                        value={confirmPassword}
                        onChange={(e) => onConfirmPasswordChange(e.target.value)}
                    />


                    <SubmitButton type="submit">Regístrate</SubmitButton>
                </Form>
            </ModalContent>
        </ModalOverlay>
    );
}
