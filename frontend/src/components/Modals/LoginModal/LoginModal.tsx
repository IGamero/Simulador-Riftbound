import { useState } from "react";
import { useGoogleLogin, type TokenResponse } from "@react-oauth/google";

import LoginModalView from "./LoginModal.view";
import RegisterModal from "../RegisterModal/RegisterModal";


interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [closing, setClosing] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);



    const loginWithGoogle = useGoogleLogin({
        onSuccess: (tokenResponse: TokenResponse) => {
            console.log("Google login success:", tokenResponse);
            handleClose();
        },
        onError: () => {
            console.error("Google login failed");
            setError("Error al iniciar sesión con Google");
        },
    });

    if (!isOpen && !closing) return null; // Condición después de hooks

    const handleClose = () => setClosing(true);

    const handleAnimationEnd = () => {
        if (closing) {
            setClosing(false);
            onClose();
            setUsername("");
            setPassword("");
            setError("");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username || !password) {
            setError("Por favor completa todos los campos");
            return;
        }
        console.log("Login:", { username, password });
        handleClose();
    };

    return (

        <>
            <LoginModalView
                closing={closing}
                error={error}
                username={username}
                password={password}
                onUsernameChange={setUsername}
                onPasswordChange={setPassword}
                onSubmit={handleSubmit}
                onClose={handleClose}
                handleAnimationEnd={handleAnimationEnd}
                onRegisterClick={() => setIsRegisterOpen(true)}
                // onRegisterClick={() => {
                //     handleClose();
                //     setTimeout(() => setIsRegisterOpen(true), 300);
                // }}
                onGoogleLogin={() => loginWithGoogle()}
            />

            {/* Renderiza el modal de registro cuando se haga clic */}
            {isRegisterOpen && (
                <RegisterModal
                    isOpen={isRegisterOpen}
                    onClose={() => setIsRegisterOpen(false)}
                />
            )}
        </>


    );
}

