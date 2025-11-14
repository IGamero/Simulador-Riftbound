import {
    ModalOverlay,
    ModalContent,
    Form,
    Input,
    InputWrapper,
    EyeIcon,
    SubmitButton,
    ErrorMsg,
} from "../../common/commonStyles";
import type { RegisterModalViewPropsInterface } from "./RegisterModal.interface";
import { modalController } from "../modalController";
import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { CloseButton } from "../../common/elements";


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
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <ModalOverlay
            $closing={closing}
            onPointerDown={modalController.handleOverlayClick(onClose)}
            onAnimationEnd={handleAnimationEnd}
        >
            <ModalContent $closing={closing} onClick={(e) => e.stopPropagation()}>
                <CloseButton onClose={onClose} />
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
                        />

                        <EyeIcon type="button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </EyeIcon>
                    </InputWrapper>

                    <InputWrapper>
                        <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirmar Contraseña"
                            value={confirmPassword}
                            onChange={(e) => onConfirmPasswordChange(e.target.value)}
                        />
                        <EyeIcon type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </EyeIcon>
                    </InputWrapper>

                    <SubmitButton type="submit">Regístrate</SubmitButton>
                </Form>
            </ModalContent>
        </ModalOverlay>
    );
}

