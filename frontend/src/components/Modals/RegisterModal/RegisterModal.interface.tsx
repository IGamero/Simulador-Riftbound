export interface RegisterModalViewPropsInterface {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;

    closing: boolean;
    error: string;
    username: string;
    password: string;
    email: string;
    confirmPassword: string;
    onUsernameChange: (value: string) => void;
    onPasswordChange: (value: string) => void;
    onConfirmPasswordChange: (value: string) => void;
    onEmailChange: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    onClose: () => void;
    handleAnimationEnd: () => void;
}