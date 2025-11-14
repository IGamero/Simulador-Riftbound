import { useState } from "react";
import RegisterModalView from "./RegisterModal.view";
import { validateEmail, validateEmpty, validateMatchPassword } from "../../../utils/formValidations";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
    const [closing, setClosing] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    if (!isOpen && !closing) return null;

    const handleClose = () => setClosing(true);

    const handleAnimationEnd = () => {
        if (closing) {
            setClosing(false);
            onClose();
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setError("");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validaciones
        const emptyError: string | boolean = validateEmpty(username, email, password, confirmPassword);
        if (emptyError) {
            setError(emptyError);
            return;
        }

        const emailError: string | boolean = validateEmail(email);
        if (emailError) {
            setError(emailError);
            return;
        }

        const passMatchError: string | boolean = validateMatchPassword(password, confirmPassword);
        if (passMatchError) {
            setError(passMatchError);
            return;
        }

        // Validar contraseña coincida
        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        console.log("Register:", { username, email, password });
        handleClose();
    };

    return (
        <RegisterModalView
            closing={closing}
            error={error}
            username={username}
            password={password}
            email={email}
            confirmPassword={confirmPassword}
            onUsernameChange={setUsername}
            onPasswordChange={setPassword}
            onConfirmPasswordChange={setConfirmPassword}
            onEmailChange={setEmail}
            onSubmit={handleSubmit}
            onClose={handleClose}
            handleAnimationEnd={handleAnimationEnd}
        />
    );
}
