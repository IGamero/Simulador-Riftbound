import { useState, useEffect } from "react";
import { useGoogleLogin, type TokenResponse } from "@react-oauth/google";
import LoginModalView from "./LoginModal.view";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

export default function LoginModal({ isOpen, onClose, onRegisterClick }: LoginModalProps) {
  const [visible, setVisible] = useState(false); // Para renderizado en DOM
  const [closing, setClosing] = useState(false); // Para animación de cierre
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setClosing(false);
    } else if (visible) {
      setClosing(true);
    }
  }, [isOpen]);

  if (!visible) return null;

  const handleClose = () => setClosing(true);

  const handleAnimationEnd = () => {
    if (closing) {
      setClosing(false);
      setVisible(false);
      setUsername("");
      setPassword("");
      setError("");
      onClose();
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
      onRegisterClick={onRegisterClick}
      onGoogleLogin={() => loginWithGoogle()}
    />
  );
}
