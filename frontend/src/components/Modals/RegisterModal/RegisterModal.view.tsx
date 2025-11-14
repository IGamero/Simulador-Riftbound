import {
    ModalOverlay,
    ModalContent,
    CloseButton,
    Form,
    Input,
    InputWrapper,
    EyeIcon,
    SubmitButton,
    ErrorMsg,
} from "./RegisterModal.styles";
import type { RegisterModalViewPropsInterface } from "./RegisterModal.interface";
import { modalController } from "../modalController";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";


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

    const [showPassword, setShowPassword] = useState(false);

    return (
        <ModalOverlay
            $closing={closing}
            onPointerDown={modalController.handleOverlayClick(onClose)}
            onAnimationEnd={handleAnimationEnd}
        >
            <ModalContent $closing={closing} onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>×</CloseButton>
                <h2>Regístrarse</h2>
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
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => onEmailChange(e.target.value)}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => onPasswordChange(e.target.value)}
                            style={{ paddingRight: "40px" }} // espacio para que no pise el icono
                        />

                        <EyeIcon type="button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </EyeIcon>
                    </InputWrapper>

                    <InputWrapper>
                        <Input
                            type="password"
                            placeholder="Confirmar Contraseña"
                            value={confirmPassword}
                            onChange={(e) => onConfirmPasswordChange(e.target.value)}
                        />
                    </InputWrapper>



                    <SubmitButton type="submit">Regístrate</SubmitButton>
                </Form>
            </ModalContent>
        </ModalOverlay>
    );
}
