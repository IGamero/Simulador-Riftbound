import { useState } from "react";

import RegisterModalView from "./RegisterModal.view";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
    disableAnimation?: boolean; // NUEVO
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
    const [closing, setClosing] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");



    if (!isOpen && !closing) return null; // Condición después de hooks

    const handleClose = () => setClosing(true);

    const handleAnimationEnd = () => {
        if (closing) {
            setClosing(false);
            onClose();
            setUsername("");
            setEmail("");
            setPassword("");
            setError("");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setError("Por favor completa todos los campos");
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
